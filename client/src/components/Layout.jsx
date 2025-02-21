import HeaderComponent from './ui/HeaderComponent';
import FooterComponent from './ui/FooterComponent';
import { Outlet } from 'react-router';
import { useState } from 'react';

export default function Layout({ user, setUser }) {
  return (
    <>
      <HeaderComponent user={user} setUser={setUser} />
      <Outlet />
    </>
  );
}
