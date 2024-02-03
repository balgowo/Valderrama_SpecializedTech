import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Calculator from './pages/Calculator.tsx';
import Hobby from './pages/Hobby.tsx';
import JSON from './pages/JSON.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/calculator" element={<Calculator/>}></Route>
        <Route path="/hobby" element={<Hobby/>}></Route>
        <Route path="/json" element={<JSON/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
