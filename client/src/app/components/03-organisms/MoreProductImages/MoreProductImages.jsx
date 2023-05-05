import React from "react";

export default function MoreProductImages() {
  return (
    <div className="relative overflow-hidden py-12 border-b border-[#e4e9ec]">
      <div className="px-4 flex flex-col gap-y-8">
        <div className="flex justify-center items-center">
          <div className="flex flex-col text-center">
            <div className="flex flex-col text-center gap-y-4">
              <div className="text-xs uppercase text-[#667479]">
                more images
              </div>
              <h2 className="text-3xl font-extrabold uppercase">
                For cats who mean business
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-dyn-list">
            <ul className="flex p-2">
              <li>
                <div className="h-[113px] relative min-w-full z-10">
                  <div
                    className={`h-[113px] w-[113px] min-h-[113px] relative overflow-hidden`}
                  >
                    <div className={`relative w-[113px] min-h-[113px]`}>
                      <img
                        src="https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9e994a7088808ad8934_vasd.png"
                        className="h-full w-full object-cover absolute inset-0 top-0 left-0 right-0 bottom-0"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className="mx-2">
                <div className="h-[113px] relative min-w-full z-10">
                  <div
                    className={`h-[113px] w-[113px] min-h-[113px] relative overflow-hidden`}
                  >
                    <div className={`relative w-[113px] min-h-[113px]`}>
                      <img
                        src="https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9e994a7088808ad8934_vasd.png"
                        className="h-full w-full object-cover absolute inset-0 top-0 left-0 right-0 bottom-0"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="h-[113px] relative min-w-full z-10">
                  <div
                    className={`h-[113px] w-[113px] min-h-[113px] relative overflow-hidden`}
                  >
                    <div className={`relative w-[113px] min-h-[113px]`}>
                      <img
                        src="https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9e994a7088808ad8934_vasd.png"
                        className="h-full w-full object-cover absolute inset-0 top-0 left-0 right-0 bottom-0"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="#buy"
            className="bg-black text-xs uppercase font-light py-3 px-7 border rounded-full"
          >
            <div className="flex justify-center items-center">
              <div className="text-white uppercase">Buy now</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
