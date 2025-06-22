//fajl se konfiguraciju rutera. Router je deo aplikacija koji kontrolise navigaciju izmedju razlicitih stranica
//ili pogleda unutar aplikacije.

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import RegisterPage from "../pages/LandingPage/RegisterPage";
import LoginPage from "../pages/LandingPage/LoginPage";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />  
        <Route path="/registerpage" element={<RegisterPage/>} />
        <Route path="/loginpage" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter ;
