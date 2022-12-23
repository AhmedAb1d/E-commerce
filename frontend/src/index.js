import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import './index.css';
import App from './Pages/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/montserrat";
import '@fortawesome/fontawesome-free/css/all.css';
import ProductsCatalog from './Pages/ProductsCatalog';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<SignUpPage/>} />
          <Route path='*' element={<LoginPage/>} />
          <Route path='/productsCatalog' element={<ProductsCatalog/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
