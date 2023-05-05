import React from "react";
import Button from "../../01-atoms/Button/Button";

export default function FoundingStory() {
  return (
    <div className="relative flex justify-center z-10 py-16">
      <div className="mx-auto flex flex-col items-center">
        <div className="flex flex-col justify-start gap-y-14">
          <div className="h-[80vw] min-h-[275px] relative overflow-hidden">
            <div className="relative third min-h-[275px] w-full mt-4">
              <img
                src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/6430882b01d44751cd40aaaf_ig-4.webp"
                className="h-full w-full object-cover absolute inset-0 top-0 left-0 right-0 bottom-0"
                alt="Purrtection Helmet"
              />
            </div>
          </div>
          <div className="px-4 flex flex-col gap-y-6">
            <div className="text-xs uppercase text-[#667479]">Our story</div>

            <div className="flex flex-col gap-y-4">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-extrabold uppercase">
                  Started from
                  <br />
                  the bottom
                </h2>
              </div>
              <div className="max-w-md">
                <div className="text-[#667479] text-md">
                  Despite the danger and uncertainty, Whiskers began scavenging
                  for materials and crafting his own tactical gear, drawing
                  inspiration from the military equipment he had seen during the
                  war. His designs were innovative and effective, and he quickly
                  became known as a skilled inventor and craftsman.
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
