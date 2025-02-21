import axiosInstance from '../../api/axiosInstance';
import './styles/form.css';
import { Form, Button } from 'react-bootstrap';

export default function FormForSignup() {
  const Hadler = async function (e) {
    const data = Object.fromEntries(new FormData(e.target));
    const res = await axiosInstance.post('/auth/signup', data);
    console.log(res);
  };
  return (
    <div  style={{margin: '10px', display: 'flex', justifyContent: 'center'}}>
      <Form
        className="form-content" style={{padding: '10px'}}
        onSubmit={(e) => {
          e.preventDefault();
          Hadler(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Имя</Form.Label>
          <Form.Control type="text" placeholder="Имя" name="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Почта</Form.Label>
          <Form.Control type="text" placeholder="Почта" name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="text" placeholder="Пароль" name="password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Зарегистрировать
        </Button>
      </Form>
    </div>
  );
}
