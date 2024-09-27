import React from 'react';
import { Link } from 'react-router-dom';

function RobotList({ robots }) {
  return (
    <div className="container">
      <h1>Adopta un Robot con Robot Lovers!</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Modelo</th>
            <th>Empresa Fabricante</th>
          </tr>
        </thead>
        <tbody>
          {robots.map(robot => (
            <tr key={robot.id}>
              <td>{robot.id}</td>
              <td><Link to={`/robots/${robot.id}`}> {robot.nombre}</Link></td>
              <td>{robot.modelo}</td>
              <td>{robot.empresaFabricante}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RobotList;
