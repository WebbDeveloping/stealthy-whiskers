import React from "react";

export default function FollowImage({ imgsrc, imgalt, height, width, slug }) {
  return (
    <a href={slug} className="">
      <div className="min-h-[48vw] sm:min-h-[23vw] md:min-h-[18vw] lg:min-h-[16vw] relative overflow-hidden flex items-center justify-center">
        <img src={imgsrc} alt={imgalt} className="w-full object-cover" />
      </div>
    </a>
  );
}
