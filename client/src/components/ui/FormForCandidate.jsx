import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './FormForCandidate.css';

export default function FormForCandidate({ onSubmit }) {
  return (
    <div className="form-container">
      <Form className="form-content" onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>ФИО</Form.Label>
          <Form.Control type="text" placeholder="Введите ФИО" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Почта</Form.Label>
          <Form.Control type="email" placeholder="Введите почту" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Телефон</Form.Label>
          <Form.Control type="text" placeholder="Введите телефон" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicExperience">
          <Form.Label>Опыт</Form.Label>
          <Form.Control type="number" placeholder="Введите опыт" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="Select">Статус</Form.Label>
          <Form.Select id="Select">
            <option> Выбор1</option>
            <option> Выбор2</option>
            <option> Выбор3</option>
            <option> Выбор4</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Id вакансии</Form.Label>
          <Form.Control type="number" placeholder="Введите Id" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Подтвердить
        </Button>
      </Form>
    </div>
  );
}
