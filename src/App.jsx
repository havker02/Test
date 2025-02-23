import React from "react";
import Navbar from "./components/Navbar";
import {Routes, Route, useLocation} from "react-router-dom";
import AuthCheck from "./components/AuthCheck";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Shop from "./pages/Shop";
import './App.css'

const App = () => {
  
  const location = useLocation();
  const hideNavbar = ["/", "/signup"]
  
  return (
    <main>
      {!hideNavbar.includes(location.pathname) && <Navbar />}
      <AuthCheck />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </main>
  )
}

export default App;