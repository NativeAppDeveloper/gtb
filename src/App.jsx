import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./mastercomponent/Home";
import LanguagSelectionScreen from "./mastercomponent/LanguageSelectionScreen";
import Login from "./mastercomponent/Login";
import VerifyOTP from "./mastercomponent/verifyOTP";
import Museum from "./mastercomponent/Museum";
import PredgeServaScreen from "./mastercomponent/pledgeSevaScreen";
import VisitScanner from "./mastercomponent/visiScanner";
import GalleryComponent from "./mastercomponent/Gallery";
import BottomNavigation from "./layout/bottomNaviagtion";
import Profile from "./mastercomponent/profile/profile";
import EditProfile from "./mastercomponent/profile/editProfile";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LanguagSelectionScreen" element={<LanguagSelectionScreen />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/VerifyOTP" element={<VerifyOTP />} />
        <Route path="/Museum" element={<Museum />} />
        <Route path="/PredgeServaScreen" element={<PredgeServaScreen />} />
        <Route path="/VisitScanner" element={<VisitScanner />} />
        <Route path="/GalleryComponent" element={<GalleryComponent />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/EditProfile" element={<EditProfile />} />

      
      </Routes>
      <BottomNavigation />
    </>
  )
}
export default App


