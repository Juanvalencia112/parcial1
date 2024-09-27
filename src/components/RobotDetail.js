import React from 'react';
import { useParams } from 'react-router-dom';
import robots from '../robots';

const RobotDetail = () => {
  const { robotId } = useParams();
  const robot = robots.find(r => r.id === parseInt(robotId));

  if (!robot) {
    return <div>Robot no encontrado</div>;
  }

  return (
    <div>
      <h1>{robot.nombre}</h1>
      <img src={robot.imagen} alt={robot.nombre} />
      <p>Modelo: {robot.modelo}</p>
      <p>Empresa: {robot.empresaFabricante}</p>
      <p>Año de Fabricación: {robot.añoFabricacion}</p>
      <p>Capacidad de Procesamiento: {robot.capacidadProcesamiento}</p>
      <p>Descripción: {robot.humor}</p>
    </div>
  );
};

export default RobotDetail;
