import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { isNewItem } from "./utils/isNew";
import { isDiscounted } from "./utils/isDiscounted";

function BestSelling({ products, isNew }) {
  // TODO: Add product card component and make size responsive
  const settings = {
    slidesToShow: 2.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    adaptiveHeight: true,
  };
  return (
    <div className="relative flex flex-col w-full z-20 py-14 px-1 gap-y-8">
      <div className="text-center ">
        <div className="flex flex-col gap-y-4">
          <div className="text-sm uppercase text-[#667479] font-light">
            Popular
          </div>
          <h2 className="text-3xl font-extrabold uppercase">Best Selling</h2>
        </div>
      </div>
      <Slider {...settings}>
        {products &&
          products.map((product) => {
            // if (!product.isBestSelling) return null;
            return (
              <div className="w-full h-full">
                <a
                  href="/product/meowtary-grenade-harness"
                  className="flex flex-col h-full w-full text-[#080808] bg-white gap-1"
                >
                  <div className="bg-[#f4f8fa] h-full">
                    <div className="h-[120vw] md:h-[65vw] md:max-h-[700px] min-h-full flex flex-col justify-end relative overflow-hidden">
                      <div className="w-full h-[120vw] md:h-[65vw] md:max-h-[700px]">
                        <img
                          src={product.PictureUrl}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-3 flex flex-col items-start justify-start py-3 pr-4 pl-5 gap-3">
                    <div className="flex flex-col gap-3 justify-start md:justify-between items-start w-full">
                      <div className="flex flex-col md:flex-row md:justify-between gap-4 md:w-full">
                        <div className="flex flex-col justify-start">
                          {isNewItem(product.isNew)}
                          <div className="flex flex-col justify-start items-start gap-2">
                            <h3 className="font-medium text-xl transform-none m-0">
                              {product.name}
                            </h3>
                            <div className="text-sm uppercase font-light ">
                              {product.Category}
                            </div>
                          </div>
                        </div>
                        <div className="text-md md:text-sm md:text-[#667479]">
                          {isDiscounted(product.Price, product.discount)}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default BestSelling;
