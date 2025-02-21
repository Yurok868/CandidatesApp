import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import SigninPage from './components/pages/SigninPage';
import SignupPage from './components/pages/SignupPage';
import SigninCandidatePage from './components/pages/SigninCandidatePage';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import InfoPage from './components/pages/InfoPage';
import CandidatesPage from './components/pages/CandidatesPage';
import axiosInstance from './api/axiosInstance';
import CandidatesFilterPage from './components/pages/CandidatesFilterPage';
function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<InfoPage />} />
        {/* <Route path="/candidates" element={<CandidatesPage />} /> */}
        <Route path="/candidates/:filter" element={<CandidatesFilterPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signinCandidate" element={<SigninCandidatePage />} />

      </Route>

    </Routes>
  );
}

export default App;
