import React from "react";
import ContentSection from "../../02-molecules/ContentSection/ContentSection";
import FollowUs from "../../03-organisms/FollowUs/FollowUs";
import Navigation from "../../03-organisms/Navigation/Navigation";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="w-full">
        <Navigation />
        <div className="py-12"></div>
        <ContentSection />
        <FollowUs />
      </div>
    </div>
  );
}
