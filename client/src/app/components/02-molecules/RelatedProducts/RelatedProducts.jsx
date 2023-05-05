import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../../TestData/products";

export default function RelatdProducts() {
  return (
    <div className="py-12 px-4">
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-4">
              <div className="text-xs uppercase text-[#667479]">RELATED</div>
              <div className="max-w-lg">
                <h2 className="text-2xl font-extrabold uppercase">
                  People also bought
                </h2>
              </div>
            </div>
            <a
              href="#buy"
              className="flex justify-start items-center gap-x-4 text-xs uppercase text-[#667479]"
            >
              <div className="relative">
                <div className="text-xs">Shop All</div>
              </div>
              <div className="relative max-w-[16px]">
                <img
                  src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b915ebba7b34_arrow-right(24x24)%402x%20(8).svg"
                  loading="lazy"
                  alt=""
                  className="max-w-[16px]"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="relative flex flex-col w-full z-20">
          <div className="flex flex-col justify-between gap-x-4">
            <div className="relative overflow-x-auto">
              <div className="relative top-0">
                <ul className="flex mb-0 flex-nowrap w-full gap-x-2">
                  {products.map((product, index) => {
                    return (
                      <li>
                        <ProductCard
                          key={index}
                          name={product.name}
                          Description={product.Description}
                          Price={product.Price}
                          Handle={product.Handle}
                          Category={product.Category}
                          PictureUrl={product.PictureUrl}
                          Brand={product.Brand}
                          Type={product.Type}
                          QuantityInStock={product.QuantityInStock}
                          isNew={product.isNew}
                          discount={product.discount}
                          isBestSelling={product.isBestSelling}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
