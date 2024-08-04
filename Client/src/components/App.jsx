import React from "react";
import Features from "./Features";
import Header from "./Header";
import Slideshow from "./Slideshow";
import Ipo from "./Ipo";
import Login from "./Login";
import Sign_up from "./Sign_Up";
import Faq from "./Faq";
import About from "./About";
import Disclaimer from "./Disclaimer";
import Dashboard from "./Dashboard";
import Financial from "./Financial";
import Home from "./Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div>
          {/* <Dashboard /> */}
          {/* <Financial /> */}
          {/* <Header />
      <Features />
      <Slideshow /> */}
          {/* <Ipo /> */}
          {/* <Faq />
      <About />
    <Disclaimer /> */}
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>

          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
          </Routes>

          <Routes>
            <Route exact path="/dashboard" element={<Dashboard />}></Route>
          </Routes>

          <Routes>
            <Route exact path="/signup" element={<Sign_up />}></Route>
          </Routes>

          {/* <Sign_up /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
