import React from "react";
import Header from "../includes/Header";
import "../../assets/css/style.css";
import Spotlight from "./Spotlight";
import MentorPage from "./MentorPage";
import Communicate from "./Communicate";
import Footer from "./Footer";
import RegistrationForm from "./RegistrationForm";
import Test from "./Test";

export default function LangingPage() {
  return (
    <>
      <Header />
      <Spotlight />
      
      <MentorPage />
      <Communicate />
      <RegistrationForm />
      <Footer />
    </>
  );
}
