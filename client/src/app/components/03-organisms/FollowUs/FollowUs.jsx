import { Link } from "react-router-dom";

import FollowImage from "../../01-atoms/FollowImage/FollowImage";

const FollowUs = () => {
  return (
    <div className="p-0">
      <div className="p-2 gap-x-4 flex flex-col lg:flex-row">
        <div className="flex gap-x-2">
          <FollowImage
            imgsrc={
              "https://assets.website-files.com/642fc428f0c0b966d5ba7a46/6430882be805c45a1ca9cd14_ig-1.webp"
            }
            imgalt={"Instagram post"}
            slug={"https://www.instagram.com"}
          />
          <FollowImage
            imgsrc={
              "https://assets.website-files.com/642fc428f0c0b966d5ba7a46/6430882b01d44751cd40aaaf_ig-4.webp"
            }
            imgalt={"Instagram post"}
            slug={"https://www.instagram.com"}
          />
        </div>
        <Link to="/" className="flex flex-col justify-center py-8 text-center">
          <div className="cursor-pointer overflow-hidden">
            <div className="text-sm md:text-lg font-semibold">
              {"@STEALTHYWHISKERS"}
            </div>
          </div>
        </Link>
        <div className="flex gap-x-2">
          <FollowImage
            imgsrc={
              "https://assets.website-files.com/642fc428f0c0b966d5ba7a46/6430882b3030fd0b87ab2d68_ig-2.webp"
            }
            imgalt={"Instagram post"}
            slug={"https://www.instagram.com"}
          />
          <FollowImage
            imgsrc={
              "https://assets.website-files.com/642fc428f0c0b966d5ba7a46/6430882bdf323a4b25e139b6_ig-3.webp"
            }
            imgalt={"Instagram post"}
            slug={"https://www.instagram.com"}
          />
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
