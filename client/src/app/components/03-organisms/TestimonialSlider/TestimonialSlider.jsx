import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { slides } from "./utils/slides";

function TestimonialSlider() {
  const settings = {
    //TODO: Add dots
    // dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    // centerMode: true,
    // centerPadding: "60px",
  };

  return (
    <div className="section min-h-[500px] flex flex-col justify-center">
      <div className="px-4 relative flex flex-col items-center justify-center">
        <Slider {...settings}>
          {slides.map((slide, index) => {
            return (
              <div className="w-full px-4 flex flex-col items-center justify-center text-center">
                <div className="max-w-md mx-auto">
                  <div className="flex flex-col items-center gap-x-4 gap-y-8 text-center">
                    <div className="width-extra-large max-w-5xl">
                      <h2 className="heading large text-3xl font-semibold uppercase">
                        {slide.title}
                      </h2>
                    </div>
                    <div className="testimonial-name">
                      <div className="subtitle text-md text-[#667479] uppercase font-light">
                        {slide.author}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialSlider;
