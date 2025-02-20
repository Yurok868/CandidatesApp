import './styles/form.css';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function FormForSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repitePassword: '',
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
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

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

        <Form.Group className="mb-3" controlId="formBasicRepitePassword">
          <Form.Label>Повторите пароль</Form.Label>
          <Form.Control
            type="text"
            placeholder="Repite password"
            name="repitPassword"
            value={formData.repitePassword}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Отправить
        </Button>
      </Form>
    </div>
  );
}
