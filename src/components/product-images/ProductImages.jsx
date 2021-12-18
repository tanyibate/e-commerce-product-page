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

export default function ProductImages() {
  let images = [imageProduct1, imageProduct2, imageProduct3, imageProduct4];
  let thumbnails = [
    imageProduct1Thumbnail,
    imageProduct2Thumbnail,
    imageProduct3Thumbnail,
    imageProduct4Thumbnail,
  ];
  const isMobile = useMediaQuery({
    query: "(max-width: 480px)",
  });
  const [currentImagePosition, setCurrentImagePosition] = useState(0);

  const gallery = (
    <div className="w-11/12 h-3/4">
      <img src={images[currentImagePosition]} alt="" className="h-full" />
      <div className={`inline-grid gap-x-4 grid-cols-${thumbnails.length}`}>
        {thumbnails.map((thumbnail, index) => {
          return (
            <img src={thumbnail} alt="product thumbnail" className="rounded" />
          );
        })}
      </div>
    </div>
  );

  const imageSlider = <ImageSlider images={images} />;

  return (
    <div className="h-full w-full flex justify-center">
      {!isMobile && gallery}
      {isMobile && <div className="w-full h-1/3">{imageSlider}</div>}
    </div>
  );
}
