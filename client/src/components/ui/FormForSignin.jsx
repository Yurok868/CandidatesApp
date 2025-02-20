import './styles/form.css';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function FormForSignin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="form-container">
      <Form className="form-content">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Почта</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type="text"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Войти
        </Button>
      </Form>
    </div>
  );
}
