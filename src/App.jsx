import React from "react";
import Navbar from "./components/Navbar";
import {Routes, Route, useLocation} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css'

const App = () => {
  const location = useLocation();
  const hideNavbar = ["/", "/signup"]
  return (
    <main>
      {!hideNavbar.includes(location.pathname) && <Navbar />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </main>
  )
}

export default App;