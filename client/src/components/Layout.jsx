import HeaderComponent from './ui/HeaderComponent';
import FooterComponent from './ui/FooterComponent';
import { Outlet } from 'react-router';
import { useState } from 'react';

export default function Layout() {
  const [user, setUser] = useState(null);

  // useEffect(() => axiosInstance.get('/refresh'), []);
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
}
