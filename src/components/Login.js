import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Login() {
  const navigate = useNavigate();

  const [session, setSession] = useState({
    login: '',
    password: '',
  });

  let [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setSession({
      ...session,
      [name]: value,
    });
  };

  const validateCredentials = async () => {
    let isValid = true;
    let newError = '';

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(session),
      });

      if (response.status === 200) {
        const data = await response.json();
        if (data.status === 'success') {
          return true;
        }
      }

      newError = 'Error de autenticación. Revise sus credenciales.';
      isValid = false;

    } catch (error) {
      newError = 'Error al conectar con el servidor. Intente de nuevo más tarde.';
      isValid = false;
    }

    setError(newError);

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = await validateCredentials();

    if (isValid) {
      navigate('/home');
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Header />
      <Container
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '10px',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <Form onSubmit={handleSubmit}>
          <h3 className="mb-4">Inicio de sesión</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              type="text"
              name="login"
              placeholder="Enter email"
              value={session.login}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={session.password}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mb-3">
            Ingresar
          </Button>

          <Button variant="secondary" className="w-100">
            Cancelar
          </Button>

          {error && (
            <div style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>
              {error}
            </div>
          )}
        </Form>
      </Container>
    </div>
  );
}

export default Login;
