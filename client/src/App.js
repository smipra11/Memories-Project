import React from "react";
import Container from "@mui/material/Container";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/auth"  exact  element={<Auth/>} />
        </Routes>

       
      </Container>
    </Router>
  );
}

export default App;
