import FormForSignin from '../ui/FormForSignin';
import { useState } from 'react';

function SigninPage({ setUser }) {
  return <FormForSignin setUser={setUser} />;
}

export default SigninPage;
