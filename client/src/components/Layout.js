import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthBox from './AuthBox';
import Header from './Header';
import { useGlobalContext } from '../context/GlobalContext';

const Layout = () => {
  const { fetchingUser } = useGlobalContext();

  return fetchingUser ? (
    <div className="loading">
      <h1>Loading</h1>
    </div>
  ) : (
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
