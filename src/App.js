import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import RobotList from './components/RobotList';
import RobotDetail from './components/RobotDetail';
import robots from './robots';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <RobotList robots={robots} /> : <Login onLogin={() => setIsAuthenticated(true)} />
          }
        />
       <Route path="/robots/:robotId" element={<RobotDetail />} />

      </Routes>
    </Router>
  );
}

export default App;
