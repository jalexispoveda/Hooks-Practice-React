import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { NavBar } from "./NavBar";
// import { AboutPage, HomePage, LoginPage } from "./";

export const MainApp = () => {
  return (
    <>
      <h1>Main App</h1>
      <NavBar></NavBar>
      <hr></hr>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
        {/* Ruta para redireccionar si no existe */}
        {/* <Route path="*" element={<HomePage />} /> */}
        <Route path="/*" element={<Navigate to="/about"></Navigate>}></Route>
      </Routes>
    </>
  );
};
