import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import About from "./component/About";
import Timeline from "./component/Timeline";
import Register from "./pages/Register";
import Gallery from "./pages/Gallery";
import ProblemStatements from "./pages/ProblemStatements";
import FAQ from "./pages/FAQ";
import StudentInnovation from "./pages/StudentInnovation";
import ScrollToTop from "./component/ScrollToTop";

function WinterOfProjects() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><WinterOfProjects /></Layout>} />
        <Route path="/timeline" element={<Layout><Timeline /></Layout>} />
        <Route path="/problems" element={<Layout><ProblemStatements /></Layout>} />
        <Route path="/student-innovation" element={<Layout><StudentInnovation /></Layout>} />
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
        <Route path="/faq" element={<Layout><FAQ /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
      </Routes>
    </Router>
  );
}
