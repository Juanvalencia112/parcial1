import { useState, useEffect } from 'react';
import Header from "./Header";
import { Table } from "react-bootstrap";

function Home() {
  const [robots, setRobots] = useState([]);

  const getRobots = async () => {
    try {
      const response = await fetch('http://localhost:3001/robots');
      const data = await response.json();
      setRobots(data);  
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getRobots();
  }, []);

  return (
    <>
      <Header />
      <Table bordered hover>
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Modelo</th>
            <th>Empresa Fabricante</th>
          </tr>
        </thead>
        <tbody>
          {robots.map((robot) => (
            <tr key={robot.id}>
              <th scope="row">{robot.id}</th>
              <td>{robot.nombre}</td>
              <td>{robot.modelo}</td>
              <td>{robot.empresaFabricante}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Home;