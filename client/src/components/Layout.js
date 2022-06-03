import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthBox from './AuthBox';
import Header from './Header';

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<AuthBox />} />
        <Route path="/register" element={<AuthBox register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
