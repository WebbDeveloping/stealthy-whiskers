import React from "react";

export default function ContentSection() {
  return (
    <div className="relative flex justify-center z-10 py-8">
      <div className="mx-auto flex flex-col items-center">
        <div className="flex flex-col justify-start gap-y-14">
          <div className="px-4 flex flex-col gap-y-6">
            <div className="text-xs uppercase text-[#667479]">
              Our Founding Leader
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-extrabold uppercase">
                  Behind the
                  <br />
                  whiskers
                </h2>
              </div>
              <div className="max-w-md">
                <div className="text-[#667479] text-md">
                  Over time, Whiskers realized that he had a gift for creating
                  gear that could help other cats survive and thrive in the
                  post-war world. He founded Stealthy Whiskers with the goal of
                  sharing his designs and expertise with as many cats as
                  possible, knowing that his gear could make a real difference
                  in the lives of those who used it.
                </div>
              </div>
            </div>
          </div>
          <div className="h-[80vw] min-h-[275px] relative overflow-hidden">
            <div className="relative third min-h-[275px] w-full mt-4">
              <img
                src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/643397e072548fef4403b969_bg-432.webp"
                className="h-full w-full object-cover absolute inset-0 top-0 left-0 right-0 bottom-0"
                alt="Purrtection Helmet"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
