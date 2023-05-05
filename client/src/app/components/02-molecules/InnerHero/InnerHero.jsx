import React from "react";

export default function InnerHero() {
  return (
    <div className="relative overflow-hidden flex flex-col z-20 min-h-auto">
      <div className="pt-32 pb-9 flex content-center">
        <div className="px-4 mx-auto relative flex flex-col items-center">
          <div className="flex flex-col items-center text-center gap-y-8">
            <div className="flex flex-col items-center gap-y-8">
              <div className="max-w-4xl">
                <h1 className="text-3xl font-extrabold uppercase">
                  Cat-approved gear for every mission
                </h1>
              </div>
              <div className="max-w-lg">
                <div className="text-lg text-[#667479]">
                  We're a team of passionate cat lovers and tactical gear
                  enthusiasts, dedicated to providing high-quality and
                  functional gear for feline companions everywhere.
                </div>
              </div>
            </div>
            <a href="#scroll">
              <img
                src={
                  "https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b9da47ba7b40_chevron-down(24x24)%402x%20(4).svg"
                }
                loading="lazy"
                alt=""
                className="max-w-[18px]"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="relative flex justify-start gap-2">
        <div
          className="relative overflow-hidden h-full min-h-[65vw] min-w-[50vw]"
          // style="
          //   will-change: transform;
          //   transform: translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
          //     rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
          //   transform-style: preserve-3d;
          // "
        >
          <div
            className="hero-image end"
            // style="
            //   will-change: transform;
            //   transform: translate3d(-5%, 0px, 0px) scale3d(1.1, 1.1, 1)
            //     rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
            //   transform-style: preserve-3d;
            // "
          >
            <div className="relative third h-[220px] w-[273px] mt-4">
              <img
                src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/6430882b01d44751cd40aaaf_ig-4.webp"
                className="h-full w-full object-cover absolute inset-0 top-0 left-0 right-0 bottom-0"
                alt="Purrtection Helmet"
              />
            </div>
          </div>
        </div>
        <div
          className="relative overflow-hidden h-full min-h-[65vw] min-w-[50vw]"
          // style="
          //   will-change: transform;
          //   transform: translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
          //     rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
          //   transform-style: preserve-3d;
          // "
        >
          <div className="relative third h-[220px] w-[273px] mt-4">
            <img
              src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/6430882b3030fd0b87ab2d68_ig-2.webp"
              className="h-full w-full object-cover absolute inset-0 top-0 left-0 right-0 bottom-0"
              alt="Purrtection Helmet"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
