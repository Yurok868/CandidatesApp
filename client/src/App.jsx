import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import SigninPage from './components/pages/SigninPage';
import SignupPage from './components/pages/SignupPage';
import SigninCandidatePage from './components/pages/SigninCandidatePage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signinCandidate" element={<SigninCandidatePage />} />
      </Route>
    </Routes>
  );
}

export default App;
