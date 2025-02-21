import React from 'react';
import { Button, Card } from 'react-bootstrap';
import ChangeStatus from './ChangeStatus';

export default function CardCandidate({ el, handleChangeStatus }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.photo} />
      <Card.Body>
        <Card.Title>{el.fullName}</Card.Title>
        <Card.Text>{el.email}</Card.Text>
        <Card.Text>{el.status}</Card.Text>
        <ChangeStatus  handleChangeStatus={handleChangeStatus} el={el}/>
      </Card.Body>
    </Card>
  );
}