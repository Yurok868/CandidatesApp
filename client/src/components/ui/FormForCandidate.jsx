import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './FormForCandidate.css';

export default function FormForCandidate({ onSubmit }) {
  return (
    <div className="form-container">
      <Form
        className="form-content"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>ФИО</Form.Label>
          <Form.Control type="text" placeholder="Введите ФИО" name="fullName" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Почта</Form.Label>
          <Form.Control type="email" placeholder="Введите почту" name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Телефон</Form.Label>
          <Form.Control type="text" placeholder="Введите телефон" name="phone" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicExperience">
          <Form.Label>Опыт</Form.Label>
          <Form.Control type="number" placeholder="Введите опыт" name="experience" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicStatus">
          <Form.Label>Статус</Form.Label>
          <Form.Control type="text" placeholder="Введите статус" name="status" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicResume">
          <Form.Label>Резюме</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Введите текст резюме"
            name="resume"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Фото</Form.Label>
          <Form.Control type="text" placeholder="Введите url фото" name="photo" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Подтвердить
        </Button>
      </Form>
    </div>
  );
}
