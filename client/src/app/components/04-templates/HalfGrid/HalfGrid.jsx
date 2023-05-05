export default function HalfGrid() {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="px-4">
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-8">
              <div className="text-xs uppercase text-[#667479]">
                Our Equipment
              </div>
              <div className="flex flex-col gap-y-4">
                <div className="max-w-lg">
                  <h2 className="text-3xl font-extrabold uppercase">
                    hand crafted camo in every item
                  </h2>
                </div>
                <div className="max-w-sm">
                  <div className="text-[#667479] text-md">
                    The "Scratch Sniper Rifle" - a sniper rifle with a built-in
                    scratching post for the cat to use during long-range
                    missions.
                  </div>
                </div>
              </div>
            </div>
            <a
              href="#buy"
              className="flex justify-start items-center gap-x-4 text-xs uppercase text-[#667479]"
            >
              <div className="relative">
                <div className="text-xs">Buy yours now</div>
              </div>
              <div className="relative max-w-[16px]">
                <img
                  src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b915ebba7b34_arrow-right(24x24)%402x%20(8).svg"
                  loading="lazy"
                  alt=""
                  className="max-w-[16px]"
                />
              </div>
            </a>
          </div>
          <div className="h-[275px] relative min-w-full z-10">
            <div
              className={`h-[275px] w-[275px] min-h-[275px] relative overflow-hidden`}
            >
              <div className={`relative w-[275px] min-h-[275px]`}>
                <img
                  src="https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9e994a7088808ad8934_vasd.png"
                  className="h-full w-full object-cover absolute inset-0 top-0 left-0 right-0 bottom-0"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
