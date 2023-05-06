import React from "react";

function OurStory() {
  return (
    <div className="px-4 py-20 relative flex justify-center z-10 h-full bg-[#ffffff] lg:w-full">
      <div className="grid-cols-3 gap-0 relative z-25 lg:w-full">
        <div className="grid grid-cols-1 grid-row-2 gap-0 items-center justify-center lg:grid-row-1 relative px-5 lg:container mx-auto">
          <div className="w-full max-w-full mx-auto mt-4">
            <div className="flex flex-col gap-y-8 justify-center text-center">
              <div className="flex flex-col gap-y-4 text-center items-center justify-center">
                <div className="max-w-lg">
                  <h2 className="text-3xl font-semibold uppercase">
                    Prepare Your Cat for Battle with Stealthy Whiskers
                  </h2>
                </div>
                <div className="max-w-md">
                  <div className="text-[#667479] text-md">
                    At Stealthy Whiskers, we're more than just a store that
                    sells cat gear. We're passionate cat owners and military
                    enthusiasts who want to help other cat owners train their
                    furry friends to become skilled and prepared warriors. Learn
                    more about our story and how we got started on our mission
                    to help cats become the best they can be.
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <a
                  href="/shop"
                  className="flex items-center bg-[#080808] text-sm text-center uppercase border rounded-full justify-center py-3 px-7 text-white"
                >
                  <div className="overflow-hidden flex flex-col cursor-pointer text-xs">
                    <div className="text-xs uppercase">ShoP All</div>
                  </div>
                </a>
                <a href="/about" className="flex items-center gap-5">
                  <div className="overflow-hidden flex flex-col cursor-pointer text-xs">
                    <div className="text-xs uppercase">Our story</div>
                  </div>
                  <div className=" ">
                    <img
                      src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b915ebba7b34_arrow-right(24x24)%402x%20(8).svg"
                      loading="lazy"
                      alt=""
                      className="w-[14px] h-[14px]"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center mt-16 gap-2 lg:justify-between lg:absolute lg:z-10 lg:px-5 lg:items-center">
            <div className="relative third h-[220px] w-[113px] mt-4 lg:m-0 lg:h-[21vw] lg:w-[15vw]">
              <img
                src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc5b24525316565e8ab0d_11.webp"
                className="h-full w-full object-cover"
                alt="Purrtection Helmet"
              />
            </div>
            <div className="relative third h-[220px] lg:h-[21vw] lg:w-[15vw] w-[113px] mt-16 lg:m-0">
              <img
                src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc5b200c6121239e961ea_9.webp"
                className="h-full w-full object-cover"
                alt="Purrtection Helmet"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
