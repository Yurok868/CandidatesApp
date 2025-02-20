import axiosInstance from '../../api/axiosInstance';
import './styles/form.css';
import { Form, Button } from 'react-bootstrap';

export default function FormForSignin() {
  const Hadler = async function (e) {
    const data = Object.fromEntries(new FormData(e.target));
    const res = await axiosInstance.post('/auth/login', data);
    console.log(res);
  };

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          Hadler(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Почта</Form.Label>
          <Form.Control type="text" placeholder="Email" name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="text" placeholder="Password" name="password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Войти
        </Button>
      </Form>
    </div>
  );
}
