import React from "react";
import Navigation from "../../03-organisms/Navigation/Navigation";
import HeroBgImage from "../../02-molecules/HeroBgImage/HeroBgImage";
import ProductGrid from "../../03-organisms/ProductGrid/ProductGrid";
import { products } from "../../../TestData/products";
import TestimonialSlider from "../../03-organisms/TestimonialSlider/TestimonialSlider";
import FollowUs from "../../03-organisms/FollowUs/FollowUs";
import Footer from "../../03-organisms/Footer/Footer";

export default function CategoryPage() {
  const HeroData = {
    subtitle: "Tactical Gear",
    titleTop: "THE PURRFECT ",
    titleBottom: "TACTICAL GEAR",
    image:
      "https://assets.website-files.com/642fc428f0c0b942b1ba7a71/64304edba113321c8796a0f0_asvsdv.png",
  };
  return (
    <>
      <Navigation />
      <HeroBgImage data={HeroData} />
      <ProductGrid products={products} />
      <TestimonialSlider />
      <FollowUs />
      <Footer />
    </>
  );
}
