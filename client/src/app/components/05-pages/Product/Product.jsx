import React from "react";
import Footer from "../../03-organisms/Footer/Footer";
import FollowUs from "../../03-organisms/FollowUs/FollowUs";
import Navigation from "../../03-organisms/Navigation/Navigation";
import TestimonialSlider from "../../03-organisms/TestimonialSlider/TestimonialSlider";
import ProductHero from "../../03-organisms/ProductHero/ProductHero";
import ProductDetails from "../../02-molecules/ProductDetails/ProductDetails";
import HalfGrid from "../../04-templates/HalfGrid/HalfGrid";
import MoreProductImages from "../../03-organisms/MoreProductImages/MoreProductImages";
import RelatdProducts from "../../02-molecules/RelatedProducts/RelatedProducts";

const product = {
  name: "Cat-Eye Goggles",
  Description:
    "Cat Eye Shields are the ultimate in military-grade protective eyewear for cats. Designed to protect your feline friend's eyes during any mission, these goggles are made with the highest quality materials to provide maximum protection against wind, dust, and other potential hazards.",
  Price: 20000,
  Handle: "cat-eye-goggles",
  Category: "Tactical Gear",
  PictureUrl:
    "https://uploads-ssl.webflow.com/642fc428f0c0b942b1ba7a71/642fc6e30d1ede73497f655c_11.png",
  Brand: "Angular",
  Type: "Advanced",
  QuantityInStock: 100,
  discount: true,
  isNew: false,
  isBestSelling: false,
  featuredItem: false,
};

export default function Product(props) {
  return (
    <div className="page-wrapper">
      <Navigation />
      <div className="page-content top-pad">
        <ProductHero product={product} />
        <ProductDetails />
        <HalfGrid />
        <MoreProductImages />
        <RelatdProducts />
        <TestimonialSlider />
        <FollowUs />
      </div>
      <Footer />
    </div>
  );
}
