import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NavBar } from "./NavBar";

import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>

      <NavBar/>

        <div className="container">

        <Routes>
          <Route exact="true" path="/" element={<HomeScreen/>} />
      
          <Route path="/about" element={<AboutScreen/>} />
          <Route path="/login" element={<LoginScreen/>} />
           
          <Route path="*" element={ <HomeScreen/>}/>
        </Routes>
        </div>
      </div>
    </Router>
  );
};
