import { isNewItem } from "./utils/isNew";
import { isDiscounted } from "./utils/isDiscounted";
import { Link } from "react-router-dom";
import ProductImage from "../../01-atoms/ProductImage/ProductImage";

const ProductCard = ({
  name,
  Description,
  Price,
  Handle,
  Category,
  PictureUrl,
  Brand,
  Type,
  QuantityInStock,
  discount,
  isNew,
  isBestSelling,
}) => {
  return (
    <div className="w-full h-full">
      <Link
        to={`/product/${Handle}`}
        className="flex flex-col  text-gray-800 bg-white gap-1"
      >
        <div className="bg-gray-100 h-full overflow-hidden">
          <div className="w-full h-[80vw] lg:h-[35vw] relative max-h-[650px] min-h-full">
            <img
              src={PictureUrl}
              alt="alt"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="px-3 flex flex-col items-start justify-start py-3 pr-4 pl-5 gap-3">
          <div className="flex flex-col gap-3 justify-start md:justify-between items-start w-full">
            <div className="flex flex-col md:flex-row md:justify-between gap-4 md:w-full">
              <div className="flex flex-col justify-start">
                {isNewItem(isNew)}
                <div className="flex flex-col justify-start items-start gap-2">
                  <h3 className="font-medium text-xl transform-none m-0">
                    {name}
                  </h3>
                  <div className="text-sm uppercase font-light ">
                    {Category}
                  </div>
                </div>
              </div>
              <div className="text-md md:text-sm md:text-[#667479]">
                {isDiscounted(Price, discount)}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
