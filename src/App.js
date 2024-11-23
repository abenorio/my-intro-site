import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Hobby from "./components/Hobby";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <div>
        <Header /> {/* ナビゲーションバー */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
