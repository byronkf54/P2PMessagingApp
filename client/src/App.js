// App.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import { Home } from './views/Home';
import { Login } from './views/Login';
import { Register } from './views/Register';
import { RegisterForm } from './components/RegisterForm';

export default function App() {
  const [cartIsEmpty] = useState(true);
  // const navigate = useNavigate();

  return (
    <div style={{position: 'fixed', bottom: 0, right: 0, left: 0, top: 0}} >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<RegisterForm />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}