import React, { useState } from "react";

import imageProduct1 from "../../assets/images/image-product-1.jpg";
import imageProduct1Thumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import imageProduct2 from "../../assets/images/image-product-2.jpg";
import imageProduct2Thumbnail from "../../assets/images/image-product-2-thumbnail.jpg";
import imageProduct3 from "../../assets/images/image-product-3.jpg";
import imageProduct3Thumbnail from "../../assets/images/image-product-3-thumbnail.jpg";
import imageProduct4 from "../../assets/images/image-product-4.jpg";
import imageProduct4Thumbnail from "../../assets/images/image-product-4-thumbnail.jpg";
import ImageSlider from "../image-slider/ImageSlider";
import { useMediaQuery } from "react-responsive";
import Lightbox from "../lightbox/Lightbox";

export default function ProductImages() {
  let images = [imageProduct1, imageProduct2, imageProduct3, imageProduct4];
  let thumbnails = [
    imageProduct1Thumbnail,
    imageProduct2Thumbnail,
    imageProduct3Thumbnail,
    imageProduct4Thumbnail,
  ];
  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const isPortrait = useMediaQuery({ orientation: "portrait" });

  const [currentImagePosition, setCurrentImagePosition] = useState(0);
  const [lightboxActive, setLightBoxActive] = useState(false);

  const tabletImage = () => {
    if (!isMobile && isPortrait) return "h-2/3";
    return "";
  };

  const gallery = (
    <div className="w-11/12">
      <img
        src={images[currentImagePosition]}
        alt="currently selected product"
        className={`${tabletImage()}  rounded-md mb-6 cursor-pointer`}
        height="300px"
        onClick={() => setLightBoxActive(true)}
      />
      <div className={`inline-grid gap-x-4 grid-cols-4`}>
        {thumbnails.map((thumbnail, index) => {
          return (
            <img
              src={thumbnail}
              alt="product thumbnail"
              className="rounded cursor-pointer"
              key={index}
              onClick={() => setCurrentImagePosition(index)}
            />
          );
        })}
      </div>
    </div>
  );

  const imageSlider = <ImageSlider images={images} />;

  return (
    <div
      className={`h-1/3 tablet:h-2/5 lg:h-full w-full lg:w-2/5  flex justify-center items-center`}
    >
      {!isMobile && gallery}
      {isMobile && <div className="w-full h-full">{imageSlider}</div>}
      {lightboxActive && (
        <Lightbox
          position={currentImagePosition}
          images={images}
          thumbnails={thumbnails}
          disable={() => setLightBoxActive(false)}
        />
      )}
    </div>
  );
}
