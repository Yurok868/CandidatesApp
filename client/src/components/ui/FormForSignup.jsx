import './styles/form.css';
import { Form, Button } from 'react-bootstrap';

export default function FormForSignup({ formData, handleChange }) {
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
            name="repitePassword"
            value={formData.repitePassword}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Зарегистрировать
        </Button>
      </Form>
    </div>
  );
}
