import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import LoginPage from './components/pages/SigninPagejsx';

function App() {


  return (
    <Routes>
      <Route element={<Layout />}>

        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
      </Route>
    </Routes>
  );
}

export default App;
