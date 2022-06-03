import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<h1>Home</h1>} />
        <Route path="/test" element={<h1>Test</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
