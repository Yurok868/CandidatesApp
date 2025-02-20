import { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance';
import { Col } from 'react-bootstrap';

export default function CandidatesPage() {
  const [data, setData] = useState([]);

  const candidates = async () => {
    const res = await axiosInstance.get('/candidates');
    console.log(res.data);

    setData(res.data);
  };

  useEffect(() => {
    candidates();
  }, []);

  return (
    <div>
      {data.map((e) => (
        <Col key={e.id}>
          <div>{e.fullName}</div>
        </Col>
      ))}
    </div>
  );
}

