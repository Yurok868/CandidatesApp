import React, { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosInstance';
import { Link, useParams } from 'react-router';
import { Col, Row } from 'react-bootstrap';
import CardCandidate from '../ui/CardCandidate';

export default function CandidatesFilterPage() {
  const [candidate, setCandidate] = useState([]);
  const param = useParams();
  useEffect(() => {
    axiosInstance.get('/candidates').then(({ data }) =>
      setCandidate(
        data.filter((el) => {
          if (param.filter === 'all') {
            return true;
          }
          return el.status === param.filter;
        }),
      ),
    );
  }, [param.filter]);

  const handleChangeStatus = (id, newStatus) => {
    console.log(id);
    axiosInstance.patch(`/candidates/${id}`, { status: newStatus }).then((res) => {
      // onStatusChange(res.data);
      setCandidate((prev) => prev.filter((candidate) => candidate.id !== id));
    });
  };

  return (
    <div>
      <Row>
        {candidate &&
          candidate.map((el) => (
            <Col style={{ marginBottom: '5px' }} md={4} key={el.id}>
              <CardCandidate el={el} handleChangeStatus={handleChangeStatus} />
            </Col>
          ))}
      </Row>
    </div>

    // <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
    //   {candidate.map((el) => (
    //     <div style={{ marginTop: '20px' }} key={el.id}>
    //       <p style={{ backgroundColor: 'grey' }}>Имя: {el.fullName}</p>
    //       <p>Почта: {el.email}</p>
    //       <p>Телефон: {el.phone}</p>
    //       <img src={el.photo} style={{ height: '300px', width: '400px' }} />
    //     </div>
    //   ))}
    // </div>
  );
}
