import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { slides } from "./utils/slides";
import "./utils/styles.css";

function BgImgSlider() {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: true,
    vertical: true,
    verticalSwiping: false,
    adaptiveHeight: true,
  };
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="w-full h-[93vh] lg:max-h-screen !flex justify-center items-center pt-20 pb-40 relative z-30 flex-col max-h-[525px] xl:h-screen sm:max-h-[650px] lg:max-w-[700px] xl:max-w-full sm:max-w-full lg:max-w-2/4 "
        >
          <img
            src={slide.image}
            alt=""
            className="absolute inset-0 object-cover w-full h-full z-0 xl:h-screen"
          />
          <div className="relative grid justify-center text-center text-white max-w-[800px] sm:max-w-full z-40 px-2">
            <h2 className="text-3xl font-semibold uppercase m-0 mb-8">
              {slide.title}
            </h2>
            <div className="button-wrapper">
              <a href="/" className="text-white uppercase text-xs">
                {slide.button.text}
              </a>
            </div>
          </div>
          <div className="overlay bg-[#0808084d] absolute top-0 left-0 w-full h-full"></div>
        </div>
      ))}
    </Slider>
  );
}

export default BgImgSlider;
