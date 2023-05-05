import React from "react";
import ShopHero from "../../02-molecules/ShopHero/ShopHero";
import Navigation from "../../03-organisms/Navigation/Navigation";
import ProductGrid from "../../03-organisms/ProductGrid/ProductGrid";
import { products } from "../../../TestData/products";
import TestimonialSlider from "../../03-organisms/TestimonialSlider/TestimonialSlider";
import FollowUs from "../../03-organisms/FollowUs/FollowUs";
import Footer from "../../03-organisms/Footer/Footer";

export default function Shop() {
  return (
    <>
      <Navigation />
      <ShopHero />
      <ProductGrid products={products} />
      <TestimonialSlider />
      <FollowUs />
      <Footer />
    </>
  );
}
