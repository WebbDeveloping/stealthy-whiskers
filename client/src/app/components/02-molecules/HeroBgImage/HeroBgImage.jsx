import React from "react";

export default function ShopHero({ data }) {
  return (
    <div className="relative flex justify-center items-end text-white pt-20 pb-12 min-h-[320px]">
      <div className="flex flex-col content-center px-4 w-full">
        <div className="relative z-30 flex flex-col text-left">
          <div className="max-w-sm">
            <div className="flex flex-col gap-y-4">
              <div className="text-xs uppercase text-white">
                {data.subtitle}
              </div>
              <h2 className="text-3xl font-extrabold uppercase text-white">
                {data.titleTop}
                <br />
                {data.titleBottom}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute overflow-hidden top-0 right-0 left-0 bottom-0 ">
        <div className="absolute top-0 right-0 left-0 bottom-0 object-cover">
          <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-30 z-20"></div>
          <div className="relative h-[420px] w-[373px] z-10">
            <img
              src={data.image}
              className="h-full w-full object-cover absolute inset-0 top-0 left-0 right-0 bottom-0"
              alt="Purrtection Helmet"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
