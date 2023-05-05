import React from "react";

export default function Image({
  width,
  height,
  src,
  alt,
  className,
  ...props
}) {
  return (
    <div
      className={`h-[${height}] w-[${width}] min-h-[${height}] relative overflow-hidden`}
    >
      <div className={`relative w-[${width}] min-h-[${height}] w-full`}>
        <img
          src={`'${src}'`}
          className="h-full w-full object-cover absolute inset-0 top-0 left-0 right-0 bottom-0"
          alt={alt}
        />
      </div>
    </div>
  );
}
