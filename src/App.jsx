// src/App.jsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header-Footer/Header";
import "./assets/CSS/Style.css";
import Home from "./pages/Home";
import Footer from "./Header-Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mt-4"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Uncomment and add these pages when ready */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
