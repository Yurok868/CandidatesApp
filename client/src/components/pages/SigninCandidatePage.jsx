<<<<<<< HEAD
import FormForCandidate from '../ui/FormForCandidate';

export default function SigninCandidatePage() {
  return <FormForCandidate />;
=======
import React from 'react';
import FormForCandidate from '../ui/FormForCandidate';

export default function SigninCandidatePage() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const res = await axiosInstance.post('/', data);
  };

  return <FormForCandidate onSubmit={handleSubmit} />;
>>>>>>> dev
}
