//fajl se konfiguraciju rutera. Router je deo aplikacija koji kontrolise navigaciju izmedju razlicitih stranica
//ili pogleda unutar aplikacije.

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />  
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter ;
