import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./component/Hero";
import About from "./component/About";
import Timeline from "./component/Timeline";
import Register from "./pages/Register";

function WinterOfProjects() {
  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-x-auto">
     
          <Hero />
    
          <About />
          <Timeline />
       
    
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WinterOfProjects />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
