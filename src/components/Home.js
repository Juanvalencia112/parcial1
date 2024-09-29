import React, { useEffect, useState } from 'react';
import Header from "./Header";
import { Table, Card, Container, Row, Col } from "react-bootstrap";
import { FormattedMessage } from 'react-intl';

function Home() {
  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null);

  const getRobots = async () => {
    try {
      const response = await fetch('http://localhost:3001/robots');
      const data = await response.json();
      setRobots(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getRobotDetail = async (robotId) => {
    try {
      const response = await fetch(`http://localhost:3001/robots/${robotId}`);
      const data = await response.json();
      setSelectedRobot(data);
    } catch (error) {
      console.error('Error al obtener detalles del robot:', error);
    }
  };

  useEffect(() => {
    getRobots();
  }, []);

  const handleRowClick = (robotId) => {
    getRobotDetail(robotId);
  };

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col md={7}>
            <Table bordered hover>
              <thead className="table-dark">
                <tr>
                  <th><FormattedMessage id="table.id" /></th>
                  <th><FormattedMessage id="table.name" /></th>
                  <th><FormattedMessage id="table.model" /></th>
                  <th><FormattedMessage id="table.manufacturer" /></th>
                </tr>
              </thead>
              <tbody>
                {robots.map((robot) => (
                  <tr key={robot.id} onClick={() => handleRowClick(robot.id)} style={{ cursor: 'pointer' }}>
                    <th scope="row">{robot.id}</th>
                    <td>{robot.nombre}</td>
                    <td>{robot.modelo}</td>
                    <td>{robot.empresaFabricante}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>

          <Col md={5}>
            {selectedRobot && (
              <Card>
                <Card.Img variant="top" src={selectedRobot.imagen} />
                <Card.Body>
                  <Card.Title>{selectedRobot.nombre}</Card.Title>
                  <Card.Text>
                    <strong><FormattedMessage id="details.year" />:</strong> {selectedRobot.añoFabricacion} <br />
                    <strong><FormattedMessage id="details.capacity" />:</strong> {selectedRobot.capacidadProcesamiento} <br />
                    <strong><FormattedMessage id="details.mood" />:</strong> {selectedRobot.humor}
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
