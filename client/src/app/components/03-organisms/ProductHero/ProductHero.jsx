import React from "react";
import { isNewItem } from "./utils/isNew";
import { isDiscounted } from "./utils/isDiscounted";
import FAQ from "../../02-molecules/FAQ/FAQ";

export default function ProductHero({ product }) {
  return (
    <div className="relative flex justify-center pt-20">
      <div className="relative flex flex-col w-full z-20">
        <div className="flex flex-col justify-between gap-x-4">
          <div className="relative overflow-x-auto">
            <div className="relative top-0">
              <ul className="flex mb-0 flex-nowrap w-full">
                <li className="relative overflow-hidden w-full mb-0 pt-0 h-full min-h-[358px] min-w-[358px]">
                  <div className="relative third min-h-[358px] min-w-[358px]">
                    <img
                      src="https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9e994a7088808ad8934_vasd.png"
                      className="h-full w-full object-cover absolute inset-0 top-0 left-0 right-0 bottom-0"
                      alt="Purrtection Helmet"
                    />
                  </div>
                </li>
                <li className="relative overflow-hidden w-full mb-0 pt-0 h-full min-h-[358px] min-w-[358px]">
                  <div className="relative third h-[358px] w-[358px]">
                    <img
                      src="https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9e581dd73d908d49cac_hqvw.png"
                      className="h-full w-full object-cover absolute inset-0 top-0 left-0 right-0 bottom-0"
                      alt="Purrtection Helmet"
                    />
                  </div>
                </li>
                <li className="relative overflow-hidden w-full mb-0 pt-0 h-full min-h-[358px] min-w-[358px]">
                  <div className="relative third h-[358px] w-[358px]">
                    <img
                      src="https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9e0fd26aa799293aa68_lknw.png"
                      className="h-full w-full object-cover absolute inset-0 top-0 left-0 right-0 bottom-0"
                      alt="Purrtection Helmet"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className="back-button-wrapper"></div>
          </div>
          <div className="max-w-md px-4 pt-9 justify-self-start align-self-start">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-y-2">
                {isNewItem(product.isNew)}

                <h2 className="text-2xl font-extrabold uppercase">
                  Scratch Sniper Rifle
                </h2>
              </div>
              <div className="text-md pb-2">
                {isDiscounted(product.Price, false)}
                {/* // this is false for testing purposes */}
              </div>
            </div>
            <div className="flex flex-col gap-y-9 gap-x-7">
              <div className="max-w-sm">
                <div className="text-[#667479] text-sm">
                  The "Scratch Sniper Rifle" - a sniper rifle with a built-in
                  scratching post for the cat to use during long-range missions.
                </div>
              </div>
              <div className="pb-3 pt-0 border-b border-[#f4f8fa]">
                <form className="m-0 mt-3 p-3 flex flex-col gap-y-9">
                  <div className="flex flex-col gap-y-3" role="group">
                    <div className="flex flex-col gap-y-3" role="group">
                      <div className="flex justify-between items-center text-[#667479] gap-4 text-xs">
                        <div
                          data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22name%22%7D%7D%5D"
                          className="block-title"
                        >
                          Size
                        </div>
                        <div href="#buy" className="button-text-wrapper">
                          <div className="button-text">Size guide</div>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs">
                        <div
                          className="flex flex-1 text-xs py-4 px-6 border border-[#e4e9ec] text-[#667479] text-center whitespace-nowrap mr-1"
                          tabindex="0"
                        >
                          <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22name%22%7D%7D%5D">
                            S (4-6)
                          </div>
                        </div>
                        <div
                          className="flex flex-1 text-xs py-4 px-6 border border-[#e4e9ec] text-[#667479] text-center whitespace-nowrap mx-1"
                          tabindex="-1"
                        >
                          <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22name%22%7D%7D%5D">
                            M (8-10)
                          </div>
                        </div>
                        <div
                          className="flex flex-1 text-xs py-4 px-6 border border-[#e4e9ec] text-[#667479] text-center whitespace-nowrap ml-1"
                          tabindex="-1"
                        >
                          <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22name%22%7D%7D%5D">
                            L (12-14)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input
                    type="submit"
                    className="flex justify-center bg-black text-white uppercase text-xs py-4 px-6 text-center whitespace-nowrap w-full rounded-full"
                  />
                </form>
              </div>
              <div className="flex p-0 gap-3 mb-4">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-5 text-[#777479] text-xs justify-start">
                    <img
                      src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b949bdba7b01_truck-5(24x24)%402x.svg"
                      loading="lazy"
                      alt=""
                      className="h-[22px] w-[22px] text-[#777479]"
                    />
                    <div className="body-display small">
                      Free Expedited Shipping
                    </div>
                  </div>
                  <div className="flex items-center gap-5 text-[#777479] text-xs justify-start">
                    <img
                      src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b91aa0ba7b12_privacy-guard-success(24x24)%402x.svg"
                      loading="lazy"
                      alt=""
                      className="h-[22px] w-[22px] text-[#777479]"
                    />
                    <div className="body-display small">2 Year Warranty</div>
                  </div>
                  <div className="flex items-center gap-5 text-[#777479] text-xs justify-start">
                    <img
                      src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b95bd8ba7b11_package-close(24x24)%402x.svg"
                      loading="lazy"
                      alt=""
                      className="h-[22px] w-[22px] text-[#777479]"
                    />
                    <div className="body-display small">60 Day Returns</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <ul className="flex flex-col gap-y-4">
                <li className="flex flex-col border-b-0 border-[#e4e9ec]">
                  <div className="relative overflow-hidden py-7 w-full px-0">
                    <div className="relative font-medium text-xs items-center uppercase z-20 color-[#080808] flex justify-between">
                      <div>Description</div>
                    </div>
                    <div
                      className={` absolute op-0 bottom-0 right-0 left-0 bg-[#f4f8fa] ${"hidden"}`}
                    ></div>
                  </div>
                  <div
                    className="overflow-hidden border-t border-[#f4f8fa] py-0"
                    style={{ height: "0px" }}
                  >
                    <div className="bg-[#e4e9ec] overflow-hidden border-t border-[#f4f8fa] px-4 py-5">
                      <div className="text-xs text-[#667479]">
                        {"description content"}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col border-b-0 border-[#e4e9ec]">
                  <div className="relative overflow-hidden py-7 w-full px-0">
                    <div className="relative font-medium text-xs items-center uppercase z-20 color-[#080808] flex justify-between">
                      <div>Delivery & Returns</div>
                    </div>
                    <div
                      className={` absolute op-0 bottom-0 right-0 left-0 bg-[#f4f8fa] ${"hidden"}`}
                    ></div>
                  </div>
                  <div
                    className="overflow-hidden border-t border-[#f4f8fa] py-0"
                    style={{ height: "0px" }}
                  >
                    <div className="bg-[#e4e9ec] overflow-hidden border-t border-[#f4f8fa] px-4 py-5">
                      <div className="text-xs text-[#667479]">
                        {"description content"}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
