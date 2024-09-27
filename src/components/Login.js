import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === 'pass') {
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <div className="container login-container">
      <h2 className="login-title">Inicio de sesión</h2>
      <div className="form-group">
        <label>Nombre de usuario</label>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Contraseña</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div className="error-message">Error de autenticación. Revise sus credenciales</div>}
      <button className="btn btn-primary" onClick={handleLogin}>Ingresar</button>
      <button className="btn btn-danger">Cancelar</button>
    </div>
  );
}

export default Login;
