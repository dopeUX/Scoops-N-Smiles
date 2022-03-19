import React from "react";
import AuthPage from "./AuthPage";
import Fragment from "./Fragment";
import Header from "./Header";
import NavbarMobile from "./Navbar_mobile";
import Footer from "./Footer";
import LoadingPage from "./LoadingPage";

export default function AppDashboard() {
  return (
    <div>
      <AuthPage />
   
      <Header></Header>
      <Fragment></Fragment>
      <Footer />
      <NavbarMobile />
    </div>
  );
}
