import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance';
import './styles/form.css';
import { Form, Button } from 'react-bootstrap';

export default function FormForSignin({ setUser }) {
  const Hadler = async function (e) {
    const data = Object.fromEntries(new FormData(e.target));
    const res = await axiosInstance.post('/auth/login', data);
    console.log(res);

    setUser(res.data.user);
    console.log(res);
  };
  const nav = useNavigate();
  return (
    <div style={{ margin: '10px', display: 'flex', justifyContent: 'center' }}>
      <Form
        className="form-content"
        style={{ padding: '10px' }}
        onSubmit={(e) => {
          e.preventDefault();
          Hadler(e);
          nav('/');
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
