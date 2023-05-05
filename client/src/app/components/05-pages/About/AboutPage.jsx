import React from "react";
import ContentSectionOne from "../../02-molecules/ContentSectionOne/ContentSectionOne";
import FoundingStory from "../../02-molecules/FoundingStory/FoundingStory";
import InnerHero from "../../02-molecules/InnerHero/InnerHero";
import ActionSection from "../../03-organisms/ActionSection/ActionSection";
import ContentSection from "../../02-molecules/ContentSection/ContentSection";
import FollowUs from "../../03-organisms/FollowUs/FollowUs";
import NavigationTransparent from "../../03-organisms/NavigationTransparent/NavigationTransparent";
import TestimonialSlider from "../../03-organisms/TestimonialSlider/TestimonialSlider";
import Footer from "../../03-organisms/Footer/Footer";
import NavigationWhite from "../../03-organisms/NavigationWhite/NavigationWhite";

export default function About() {
  return (
    <div className="home">
      <div className="w-full">
        <NavigationWhite />
        <section className="min-h-auto flex flex-col justify-start items-centerr">
          <div className="w-full">
            {/* <Hero /> */}
            <InnerHero />
          </div>
        </section>
        <ContentSectionOne />
        <FoundingStory />
        <ActionSection />

        <ContentSection />
        <TestimonialSlider />
        <FollowUs />
        <Footer />
      </div>
    </div>
  );
}
