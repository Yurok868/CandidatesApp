import { Card } from 'react-bootstrap';

export default function CandidatCard({ candidat }) {
  return (
    <Card
      className="text-white position-relative overflow-hidden"
      style={{ border: 'none' }}
    >
      <Card.Img
        src={candidat.image}
        alt={candidat.name}
        style={{ height: '250px', objectFit: 'cover' }}
      />
      <Card.ImgOverlay className="d-flex flex-column justify-content-end bg-dark bg-opacity-50">
        <Card.Title className="fw-bold">{candidat.name}</Card.Title>
        <Card.Text>{candidat.commentCount ?? 0} комментариев</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
