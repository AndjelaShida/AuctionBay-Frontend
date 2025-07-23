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
import Auctions from "../pages/auction/auctions";
import Auction from "../pages/auction/auction";
import AuctionAddedBid from "../pages/auction/auctionAddedBid";
import ProfilEmptyState from "../emptyState/profilEmptyState";
import BiddingEmpty from "../emptyState/biddingEmpty";
import WonEmptyState from "../emptyState/wonEmptyState";
import ProfileSettings from "../profileSetting/profileSettings";
import ChangePassword from "../profileSetting/changePassword";
import ChangeProfilPicture from "../profileSetting/changeProfilPicture";
import AddAuctions from "../profileSetting/addAuctions/addAuctions";
import EditAuction from "../profileSetting/editAuction/editAuction";
import EditAuctionNoImg from "../profileSetting/editAuction/editAuctionNoImg";
import ProfilePopUp from "../profileSetting/profilepopup";
import AuctionsEmptyState from "../emptyState/auctionsEmptyState";
import AuctionEmptyState from "../emptyState/auctionEmptyState";



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
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/auctionAddedBid" element={<AuctionAddedBid />} />
        <Route path="/profilemptystate" element={<ProfilEmptyState />} />
        <Route path="/biddingEmpty" element={<BiddingEmpty />} />
        <Route path="/wonemptystate" element={<WonEmptyState />} />
        <Route path="/auctionsemptystate" element={<AuctionsEmptyState />} />
           <Route path="/auctionemptystate" element={<AuctionEmptyState />} />
        <Route path="/profilesetting" element={<ProfileSettings />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/changeprofilpicture" element={<ChangeProfilPicture label={""} />} />
        <Route path="/addauction" element={<AddAuctions />} />
         <Route path="/editauction" element={<EditAuction />} />
         <Route path="/editauctionnoimg" element={<EditAuctionNoImg />} />
        <Route path="/profilepopup" element={<ProfilePopUp />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
