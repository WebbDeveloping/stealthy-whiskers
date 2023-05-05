export function NextArrow(props) {
  const { onClick } = props;
  // TODO: I think these arrows need to be swapped
  return (
    <div
      className="absolute bottom-[36px] w-[38px] h-[38px] border-[1px] border-[#feffff33] rounded-full justify-center items-center p-0 flex top-auto md:right-[50%] md:left-[35%] right-auto left-[12%] z-10 transform transition-all hover:scale-110"
      onClick={onClick}
    >
      <div className="relative !flex items-center justify-center w-full box-border">
        <img
          src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b99416ba7a5c_arrow-left(24x24)%402x%20(5).svg"
          loading="lazy"
          alt=""
          className="w-[14px] h-[14px] transform transition-all hover:scale-110"
        />
      </div>
    </div>
  );
}

export function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute md:left-[65%] md:right-[35%] right-auto left-[75%] bottom-[36px] w-[38px] h-[38px] border-[#feffff33] items-center p-0 flex top-auto z-10 rounded-full border justify-center transform transition-all hover:scale-110"
      onClick={onClick}
    >
      <div className="slider-arrow-wrapper !flex flex-col items-center justify-center">
        <img
          src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b93258ba7a56_arrow-right(24x24)%402x%20(5).svg"
          loading="lazy"
          alt=""
          className="w-[14px] h-[14px] transform transition-all hover:scale-110"
        />
      </div>
    </div>
  );
}
