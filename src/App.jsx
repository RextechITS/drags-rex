import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FramerMouseMove from "./components/FramerMouseMove";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/projects";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <>

      <Header />
      <FramerMouseMove />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>



      <Footer />


    </>
  )
}

export default App;
