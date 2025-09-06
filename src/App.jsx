import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import SellProduct from "./components/SellProduct/SellProduct";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/sell" element={<SellProduct />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
