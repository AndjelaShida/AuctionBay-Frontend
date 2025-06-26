//fajl se konfiguraciju rutera. Router je deo aplikacija koji kontrolise navigaciju izmedju razlicitih stranica
//ili pogleda unutar aplikacije.

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import RegisterPage from "../pages/LandingPage/RegisterPage";
import LoginPage from "../pages/LandingPage/LoginPage";
import ForgotPasswordPage from "../pages/LandingPage/ForgotPasswordPage";
import MyAuction from "../pages/profile/myAuction";
import Bidding from "../pages/profile/bidding";
import Won from "../pages/profile/won";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/forgotpasswordpage" element={<ForgotPasswordPage />} />
        <Route path="/myauction" element={<MyAuction />} />
         <Route path="/bidding" element={<Bidding />} />
          <Route path="/won" element={<Won />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
