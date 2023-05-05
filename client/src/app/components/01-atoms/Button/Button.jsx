import React from "react";

function Button({ href, className, children, showArrow }) {
  return (
    <a href={href} className={className}>
      <div className="button-text-wrapper overflow-hidden flex flex-col cursor-pointer text-xs">
        <div className="text-xs">{children}</div>
      </div>
      {showArrow && (
        <div className="link-arrow-wrapper ">
          <img
            src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b915ebba7b34_arrow-right(24x24)%402x%20(8).svg"
            loading="lazy"
            alt=""
            className="arrow-icon w-[14px] h-[14px]"
          />
        </div>
      )}
    </a>
  );
}

export default Button;
