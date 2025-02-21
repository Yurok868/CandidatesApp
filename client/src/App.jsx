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
  const [user, setUser] = useState(null);

  useEffect(
    () =>
      axiosInstance.get('/tokens/refresh').then(({ data }) => {
        setUser(data.user);
      }),
    [],
  );

  return (
    <Routes>
      <Route path="/" element={<Layout user={user} setUser={setUser} />}>
        <Route path="/" element={<InfoPage />} />
        {/* <Route path="/candidates" element={<CandidatesPage />} /> */}
        <Route path="/candidates/:filter" element={<CandidatesFilterPage />} />
        <Route path="/signin" element={<SigninPage setUser={setUser} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signupCandidate" element={<SigninCandidatePage />} />
      </Route>
    </Routes>
  );
}

export default App;
