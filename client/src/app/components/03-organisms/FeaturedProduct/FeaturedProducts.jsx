import React from "react";

const FeaturedProducts = () => {
  // TODO: add featured products from the database
  return (
    <div className="relative flex flex-col justify-between gap-x-4 px-[5vw]">
      <div className="flex flex-col gap-y-14">
        <div className="max-w-lg mx-auto text-center">
          <div className="flex flex-col gap-x-4 gap-y-6 justify-start">
            <div className="text-sm font-thin uppercase">Featured</div>
            <h2 className="text-4xl font-semibold uppercase">
              Look inside our Most selected products
            </h2>
          </div>
        </div>

        <div className="max-w-full">
          <ul className="flex flex-col gap-x-4 gap-y-14">
            <li className="w-full">
              <div className="flex flex-col gap-y-14 lg:flex-row">
                <div className="max-w-xs flex flex-col gap-x-4 gap-y-4 pr-16">
                  <div className="flex flex-col gap-y-4">
                    <h3 className="text-2xl m-0">Purrtection Helmet</h3>
                    <div className="text-[#667479] text-sm">
                      The Purrtection Helmet is a military-grade headgear
                      designed to keep your cat safe and comfortable during any
                      mission.
                    </div>
                  </div>
                  <a
                    href="/product/purrtection-helmet"
                    className="flex just justify-between items-center w-full"
                  >
                    <div className="flex flex-col p-0 gap-y-4 gap-x-6 text-[#667479] justify-center cursor-pointer">
                      <div className="button-text">View full product</div>
                    </div>
                    <div className="overflow-hidden">
                      <img
                        src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b915ebba7b34_arrow-right(24x24)%402x%20(8).svg"
                        loading="lazy"
                        alt=""
                        className="max-w-[14px]"
                      />
                    </div>
                  </a>
                </div>
                <div className="flex gap-x-1 lg:gap-x-4 w-full flex-grow lg:max-w-3/4">
                  <div className="relative min-h-[35vw] bg-[#f4f8fa] justify-center items-center flex mb-16">
                    <img
                      src="https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc6d151b8ae1501defbdb_9.png"
                      className="w-full object-cover h-full"
                      alt="Purrtection Helmet"
                    />
                  </div>
                  <div className="relative min-h-[35vw] bg-[#f4f8fa] justify-center items-center flex mt-8 mb-8">
                    <img
                      src="https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9cd5e9c6b5efd29eba6_10.png"
                      className="w-full object-cover h-full"
                      alt="Purrtection Helmet"
                    />
                  </div>
                  <div className="relative min-h-[35vw] bg-[#f4f8fa] justify-center items-center flex mt-16">
                    <img
                      src="https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc6d151b8ae1501defbdb_9.png"
                      className="w-full object-cover h-full"
                      alt="Purrtection Helmet"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li className="w-full">
              <div className="flex flex-col gap-y-14 lg:flex-row">
                <div className="max-w-xs flex flex-col gap-x-4 gap-y-8 pr-16 lg:w-1/4">
                  <div className="flex flex-col gap-y-4">
                    <h3 className="text-2xl m-0 uppercase">
                      Purrtection Helmet
                    </h3>
                    <div className="text-[#667479] text-sm">
                      The Purrtection Helmet is a military-grade headgear
                      designed to keep your cat safe and comfortable during any
                      mission.
                    </div>
                  </div>
                  <a
                    href="/product/purrtection-helmet"
                    className="flex just justify-between items-center w-full"
                  >
                    <div className="flex flex-col p-0 gap-y-4 gap-x-6 text-[#667479] justify-center cursor-pointer">
                      <div className="button-text">View full product</div>
                    </div>
                    <div className="overflow-hidden">
                      <img
                        src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b915ebba7b34_arrow-right(24x24)%402x%20(8).svg"
                        alt=""
                        className="max-w-[14px]"
                      />
                    </div>
                  </a>
                </div>
                <div className="flex gap-x-1 lg:gap-x-4 w-full flex-grow lg:max-w-3/4">
                  <div className="relative min-h-[35vw] bg-[#f4f8fa] justify-center items-center flex mb-16">
                    <img
                      src="https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc6d151b8ae1501defbdb_9.png"
                      className="w-full object-cover h-full"
                      alt="Purrtection Helmet"
                    />
                  </div>
                  <div className="relative min-h-[35vw] bg-[#f4f8fa] justify-center items-center flex my-8">
                    <img
                      src="https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9cd5e9c6b5efd29eba6_10.png"
                      className="w-full object-cover h-full"
                      alt="Purrtection Helmet"
                    />
                  </div>
                  <div className="relative min-h-[35vw] bg-[#f4f8fa] justify-center items-center flex mt-16">
                    <img
                      src="https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc6d151b8ae1501defbdb_9.png"
                      className="w-full object-cover h-full"
                      alt="Purrtection Helmet"
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
