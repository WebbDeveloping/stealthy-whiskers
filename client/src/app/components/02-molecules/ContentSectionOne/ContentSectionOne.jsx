import React from "react";

function ContentSectionOne() {
  return (
    <div className="relative flex justify-center z-10">
      <div className="px-4 mx-auto flex flex-col items-center">
        <div className="pt-16 pb-8">
          <div>
            <div className="max-w-lg">
              <div className="flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-4">
                  <div className="max-w-2xl">
                    <h2 className="text-3xl font-extrabold uppercase">
                      Join the ranks of elite feline soldiers
                    </h2>
                  </div>
                  <div className="max-w-md">
                    <div className="text-[#667479] text-md">
                      In the aftermath of World War Three, a cat named Whiskers
                      found himself struggling to survive in a world torn apart
                      by conflict. He witnessed firsthand the devastation and
                      destruction wrought by the war, and he knew that he needed
                      to do something to help other cats in similar situations.
                      <br />
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-start">
                  <a
                    href="/shop"
                    className="bg-black text-xs uppercase font-light py-3 px-7 border rounded-full"
                  >
                    <div className="w-full overflow-hidden flex justify-center items-center cursor-pointer">
                      <div className="text-white text-xs">Shop now</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSectionOne;
