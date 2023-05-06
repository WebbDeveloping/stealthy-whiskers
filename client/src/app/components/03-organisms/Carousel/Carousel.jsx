import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./utils/styles.css";
import { slides } from "./utils/slides";

function Carousel() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    centerMode: true,
    className: "center",
  };
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => {
        return (
          <div
            className="relative min-h-[70vw] lg:max-w-[1300px] py-9 px-6 overflow-x-hidden lg:max-h-[700px] rounded-md shadow-lg overflow-y-hidden"
            key={index}
          >
            <img
              className="absolute inset-0 object-cover h-full w-full"
              src={slide.image}
              alt=""
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 lg:pl-14 lg:pb-14 max-w-lg flex flex-col gap-y-4">
              <h2 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                {slide.title}
              </h2>
              <a
                href={slide.button.link}
                className="inline-block py-2 text-sm sm:text-md lg:text-lg font-medium leading-5 text-white uppercase transition-colors duration-200 transform hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              >
                {slide.button.text}
              </a>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

export default Carousel;
