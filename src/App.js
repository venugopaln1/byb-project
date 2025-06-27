import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import WhyUs from "./Components/WhyUs";
import Blog from "./Components/Blog";
import Career from "./Components/Career";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/why-choose-us" element={<WhyUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
