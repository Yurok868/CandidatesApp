import FormForSignin from '../ui/FormForSignin';
import { useState } from 'react';
import axiosInstance from '../../axiosInstance';

function SigninPage() {
  const [admin, setAdmin] = useState();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const res = await axiosInstance.post('/auth/login', data);
    setAdmin(res.data);
    setAccessToken(res.data.accessToken);
  };

  return (
    <FormForSignin
      handleChange={handleChange}
      formData={formData}
      loginHandler={loginHandler}
    />
  );
}

export default SigninPage;
