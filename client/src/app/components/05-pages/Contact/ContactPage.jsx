import React from "react";
import ContactForm from "../../02-molecules/ContactForm/ContactForm";
import ContentSection from "../../02-molecules/ContentSection/ContentSection";
import FAQ from "../../02-molecules/FAQ/FAQ";
import FollowUs from "../../03-organisms/FollowUs/FollowUs";
import Footer from "../../03-organisms/Footer/Footer";
// import NavigationTransparent from "../../03-organisms/NavigationTransparent/NavigationTransparent";
import NavigationWhite from "../../03-organisms/NavigationWhite/NavigationWhite";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="w-full">
        <NavigationWhite />
        <div className="py-12"></div>
        <ContentSection />
        <ContactForm />
        <FAQ />
        <FollowUs />
        <Footer />
      </div>
    </div>
  );
}
