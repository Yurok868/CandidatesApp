import React from 'react';
import FormForCandidate from '../ui/FormForCandidate';
import axiosInstance from '../../api/axiosInstance';

export default function SigninCandidatePage() {
  const handleSubmit = async (e) => {
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    
    const res = await axiosInstance.post('/candidates', data);
    console.log(res);
  };

  return <FormForCandidate onSubmit={handleSubmit} />;
}
