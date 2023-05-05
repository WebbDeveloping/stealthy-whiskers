export default function ProductDetails() {
  return (
    <div className="relative overflow-hidden pt-12 pb-4">
      <div className="flex flex-col px-4">
        <div className="flex flex-col justify-between gap-y-8">
          <div className="relative flex items-center">
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-4">
                <div className="text-xs uppercase text-[#667479]">Details</div>
                <div className="flex flex-col gap-y-2">
                  <div className="width-small">
                    <h2 className="text-3xl font-extrabold uppercase">
                      Why we made this Item
                    </h2>
                  </div>
                  <div className="max-w-sm">
                    <div className="text-[#667479] text-md">
                      The "Scratch Sniper Rifle" - a sniper rifle with a
                      built-in scratching post for the cat to use during
                      long-range missions.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start">
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
          <div className="relative overflow-x-auto">
            <div className="relative top-0">
              <ul className="flex mb-0 flex-nowrap w-full">
                <li className="relative overflow-hidden w-full mb-0 pt-0 h-full min-h-[252px] min-w-[252px]">
                  <div className="relative third min-h-[252px] min-w-[252px]">
                    <img
                      src="https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9e581dd73d908d49cac_hqvw.png"
                      className="h-full w-full object-cover absolute inset-0 top-0 left-0 right-0 bottom-0"
                      alt="Purrtection Helmet"
                    />
                  </div>
                </li>
                <li className="relative overflow-hidden w-full mb-0 pt-0 h-full min-h-[252px] min-w-[252px]">
                  <div className="relative third h-[252px] w-[252px]">
                    <img
                      src="https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9e994a7088808ad8934_vasd.png"
                      className="h-full w-full object-cover absolute inset-0 top-0 left-0 right-0 bottom-0"
                      alt="Purrtection Helmet"
                    />
                  </div>
                </li>
                <li className="relative overflow-hidden w-full mb-0 pt-0 h-full min-h-[252px] min-w-[252px]">
                  <div className="relative third h-[252px] w-[252px]">
                    <img
                      src="https://assets.website-files.com/642fc428f0c0b942b1ba7a71/642fc9e0fd26aa799293aa68_lknw.png"
                      className="h-full w-full object-cover absolute inset-0 top-0 left-0 right-0 bottom-0"
                      alt="Purrtection Helmet"
                    />
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
