import React, { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosInstance';
import { Link } from 'react-router';

export default function CandidatesPage() {
  const [candidate, setCandidate] = useState([]);
  useEffect(() => {
    axiosInstance.get('/candidates').then(({ data }) => setCandidate(data));
  }, []);

  console.log(candidate);

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      {candidate.map((el) => (
        <div style={{ marginTop: '20px' }} key={el.id}>
          <p style={{ backgroundColor: 'grey' }}>Имя: {el.fullName}</p>
          <p>Почта: {el.email}</p>
          <p>Телефон: {el.phone}</p>
          <img src={el.photo} style={{ height: '300px', width: '400px' }} />
          {/* <button onSubmit={()=>{
            
            ax.get('')
            setCandidate({...candidate, candidate.filter((can)=> can.id === el.id)status})
            }}></button> */}
        </div>
      ))}
    </div>
  );
}
