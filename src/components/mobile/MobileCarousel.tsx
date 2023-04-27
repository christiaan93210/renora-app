import { useState } from "react";
import Carousel from "react-simply-carousel";

import { useSelector, shallowEqual } from "react-redux";

import Card from "./Card";

const MobileCarousel = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  let assets: IAsset[] = useSelector(
    (state: AssetsState) => state.assets,
    shallowEqual
  );

  return (
    <div>
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "none",
          },
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: "blue",
          },
        }}
        onRequestChange={setActiveSlide}
        itemsToShow={2}
        speed={400}
      >
        {assets.map((asset, index) => (
          <Card asset={asset} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MobileCarousel;
