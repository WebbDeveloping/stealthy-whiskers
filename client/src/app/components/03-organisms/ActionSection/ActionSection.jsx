import React from "react";

function ActionSection() {
  return (
    <div className="min-h-[400px] sm:min-h-[650px] md:min-h-[800px] pt-10 pb-20 flex justify-center items-stretch relative">
      <div className="relative z-20 text-white text-center flex flex-col gap-y-9 gap-x-4 px-4 max-w-full overflow-hidden justify-center">
        <div className="pt-8 min-h-auto text-white flex  items-center">
          <div className="w-full">
            <h1 className="whitespace-nowrap text-8xl font-semibold uppercase">
              Prepare Your Cat for Battle with Stealthy Whiskers
            </h1>
          </div>
        </div>
        <div className="px-4 max-w-full">
          <div className="flex flex-col justify-center text-center items-center gap-y-8">
            <div className="max-w-md">
              <div className="text-white text-xl">
                Our products are designed to help your feline companion become a
                skilled and prepared warrior.
              </div>
            </div>
            <a
              href="/shop"
              className="bg-white border rounded-full text-black px-7 py-2 uppercase text-sm"
            >
              <div className="w-full">
                <div className="text-xs text-black">Shop all gear</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <img
        src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/64305b7668eac9572d4d606a_bg-4.webp"
        alt=""
        className="absolute top-0 left-0 object-cover w-full h-full z-[5]"
      />
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-[#07090c1a] z-10"></div>
    </div>
  );
}

export default ActionSection;
