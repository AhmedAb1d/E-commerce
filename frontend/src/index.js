import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import NoPage from './Pages/NoPage';
import SignUpPage from './Pages/SignUpPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<SignUpPage/>} />
          <Route path='*' element={<NoPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
