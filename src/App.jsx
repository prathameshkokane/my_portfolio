import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
