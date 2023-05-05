import React from "react";
import FaqIcon from "./utils/FaqIcon.jsx";

export default function FAQ() {
  const tabListOne = [
    {
      title: "What is the difference between a cat and a kitten?",
      content:
        "A kitten is a juvenile cat. After being born, kittens are totally dependent on their mother for survival and they do not normally open their eyes until after seven to ten days. After about two weeks, kittens quickly develop and begin to explore the world outside the nest. After a further three to four weeks, they begin to eat solid food and grow adult teeth. Domestic kittens are highly social animals and usually enjoy human companionship.",
    },
    {
      title: "What is the difference between a cat and a kitten?",
      content:
        "A kitten is a juvenile cat. After being born, kittens are totally dependent on their mother for survival and they do not normally open their eyes until after seven to ten days. After about two weeks, kittens quickly develop and begin to explore the world outside the nest. After a further three to four weeks, they begin to eat solid food and grow adult teeth. Domestic kittens are highly social animals and usually enjoy human companionship.",
    },
    {
      title: "What is the difference between a cat and a kitten?",
      content:
        "A kitten is a juvenile cat. After being born, kittens are totally dependent on their mother for survival and they do not normally open their eyes until after seven to ten days. After about two weeks, kittens quickly develop and begin to explore the world outside the nest. After a further three to four weeks, they begin to eat solid food and grow adult teeth. Domestic kittens are highly social animals and usually enjoy human companionship.",
    },
  ];

  const tabListTwo = [
    {
      title: "What is the difference between a cat and a kitten?",
      content:
        "A kitten is a juvenile cat. After being born, kittens are totally dependent on their mother for survival and they do not normally open their eyes until after seven to ten days. After about two weeks, kittens quickly develop and begin to explore the world outside the nest. After a further three to four weeks, they begin to eat solid food and grow adult teeth. Domestic kittens are highly social animals and usually enjoy human companionship.",
    },
    {
      title: "What is the difference between a cat and a kitten?",
      content:
        "A kitten is a juvenile cat. After being born, kittens are totally dependent on their mother for survival and they do not normally open their eyes until after seven to ten days. After about two weeks, kittens quickly develop and begin to explore the world outside the nest. After a further three to four weeks, they begin to eat solid food and grow adult teeth. Domestic kittens are highly social animals and usually enjoy human companionship.",
    },
    {
      title: "What is the difference between a cat and a kitten?",
      content:
        "A kitten is a juvenile cat. After being born, kittens are totally dependent on their mother for survival and they do not normally open their eyes until after seven to ten days. After about two weeks, kittens quickly develop and begin to explore the world outside the nest. After a further three to four weeks, they begin to eat solid food and grow adult teeth. Domestic kittens are highly social animals and usually enjoy human companionship.",
    },
  ];

  function renderTabList(tabList) {
    // we need a function that will had the height to the tab content when its clicked
    return tabList.map((tab, index) => {
      return (
        <div className="flex flex-col border-b-0 border-[#e4e9ec]">
          <div className="relative overflow-hidden py-7 w-full px-0">
            <div className="relative font-medium text-xs items-center uppercase z-20 color-[#080808] flex justify-between">
              <div>{tab.title}</div>

              <FaqIcon />
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
              <div className="text-xs text-[#667479]">{tab.content}</div>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="relative py-16">
      <div className="relative overflow-hidden px-4 mx-auto z-20">
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col text-center gap-y-4">
            <div className="flex flex-col text-center gap-y-4">
              <div className="text-xs uppercase text-[#667479]">FAQ</div>
              <h2 className="text-3xl font-extrabold uppercase">
                Frequent questions
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col">{renderTabList(tabListOne)}</div>
              <div className="flex flex-col">{renderTabList(tabListOne)}</div>
            </div>
            <a
              href="/faq"
              className="bg-[#080808] text-white py-3 px-6 border rounded-full text-center"
            >
              <div className="relative w-full text-xs">
                <div className="uppercase">View all FAQ</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
