import ActionSection from "../../03-organisms/ActionSection/ActionSection";
import BestSelling from "../../03-organisms/BestSelling/BestSelling";
import BgImgSlider from "../../03-organisms/BgImgSlider/BgImgSlider";
import FeaturedProducts from "../../03-organisms/FeaturedProduct/FeaturedProducts";
import FollowUs from "../../03-organisms/FollowUs/FollowUs";
import Footer from "../../03-organisms/Footer/Footer";
import Hero from "../../03-organisms/Hero/Hero";
import NavigationTransparent from "../../03-organisms/NavigationTransparent/NavigationTransparent";
import OurStory from "../../03-organisms/OurStory/OurStory";
import ProductGrid from "../../03-organisms/ProductGrid/ProductGrid";
import TestimonialSlider from "../../03-organisms/TestimonialSlider/TestimonialSlider";
import { products } from "../../../TestData/products";
import Carousel from "../../03-organisms/Carousel/Carousel";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden page-wrapper">
      <NavigationTransparent />
      <Hero />
      <section className="h-full bg-[#ffffff] flex justify-center">
        <div className="container">
          <OurStory className="mx-auto w-full overflow-hidden" />
        </div>
      </section>
      <Carousel />
      <BestSelling products={products} />
      <section className="py-10 flex flex-col items-center">
        <BgImgSlider />
        <br />
        <ProductGrid products={products} />
      </section>
      <section className="relative pb-16 flex justify-center max-w-[100%]">
        <FeaturedProducts />
      </section>
      <section>
        <ActionSection />
      </section>
      <TestimonialSlider />
      <FollowUs />
      <Footer />
    </div>
  );
}
