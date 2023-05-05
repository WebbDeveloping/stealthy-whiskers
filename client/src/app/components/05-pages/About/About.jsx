import React from "react";
import ContentSectionOne from "../../02-molecules/ContentSectionOne/ContentSectionOne";
import FoundingStory from "../../02-molecules/FoundingStory/FoundingStory";
import InnerHero from "../../02-molecules/InnerHero/InnerHero";
import BgImgSlider from "../../03-organisms/BgImgSlider/BgImgSlider";
import ContentSection from "../../02-molecules/ContentSection/ContentSection";
import FollowUs from "../../03-organisms/FollowUs/FollowUs";
import Navigation from "../../03-organisms/Navigation/Navigation";
import TestimonialSlider from "../../03-organisms/TestimonialSlider/TestimonialSlider";
import Footer from "../../03-organisms/Footer/Footer";

export default function About() {
  return (
    <div className="home">
      <div className="w-full">
        <Navigation />
        <section className="min-h-auto flex flex-col justify-start items-centerr">
          <div className="w-full">
            {/* <Hero /> */}
            <InnerHero />
          </div>
        </section>
        <ContentSectionOne />
        <FoundingStory />
        <BgImgSlider />

        <ContentSection />
        <TestimonialSlider />
        <FollowUs />
        <Footer />
      </div>
    </div>
  );
}
