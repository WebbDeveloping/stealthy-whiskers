import React from "react";
import HeroBgImage from "../../02-molecules/HeroBgImage/HeroBgImage";
import NavigationTransparent from "../../03-organisms/NavigationTransparent/NavigationTransparent";
import ProductGrid from "../../03-organisms/ProductGrid/ProductGrid";
import { products } from "../../../TestData/products";
import TestimonialSlider from "../../03-organisms/TestimonialSlider/TestimonialSlider";
import FollowUs from "../../03-organisms/FollowUs/FollowUs";
import Footer from "../../03-organisms/Footer/Footer";

export default function Shop() {
  const HeroData = {
    subtitle: "Shop All",
    titleTop: "FIND THE",
    titleBottom: "PURRFECT FIT",
    image:
      "https://assets.website-files.com/642fc428f0c0b966d5ba7a46/64305b76ca8aeb71e222e610_bg-5.webp",
  };
  return (
    <>
      <NavigationTransparent />
      <HeroBgImage data={HeroData} />
      <ProductGrid products={products} />
      <TestimonialSlider />
      <FollowUs />
      <Footer />
    </>
  );
}
