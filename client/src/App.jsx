import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WinterOfProjects from './component/Hero.jsx';
import Register from './pages/Register.jsx';

function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<WinterOfProjects />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
