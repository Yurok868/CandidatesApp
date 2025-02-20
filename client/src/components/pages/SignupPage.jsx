import FormForSignup from '../ui/FormForSignup';
<<<<<<< HEAD
=======
import { useState } from 'react';

>>>>>>> dev
function SignupPage() {
  const [newHR, setNewHR] = useState();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repitePassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const signupHandler = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    const res = await axiosInstance.post('/auth/signup', data);
    if (res.status !== 200) alert('Ошибка регистрации');
    setNewHR(res.data);
    setAccessToken(res.data.accessToken);
  };

  return (
    <FormForSignup
      handleChange={handleChange}
      formData={formData}
      signupHandler={signupHandler}
    />
  );
}

export default SignupPage;
