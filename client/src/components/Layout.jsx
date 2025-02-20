import HeaderComponent from './ui/HeaderComponent';
import FooterComponent from './ui/FooterComponent';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
}
