import React, { useState } from "react";
import closeIcon from "../../assets/icons/close.svg";

export default function Lightbox({ images, position, thumbnails, disable }) {
  const [currentImagePosition, setCurrentImagePosition] = useState(position);
  const renderThumbnail = (thumbnail, index) => {
    return (
      <div
        key={index}
        className="w-full h-full relative overflow-hidden rounded-lg outline-none hover:border-orange border-transparent border-2"
      >
        <img
          src={thumbnail}
          alt="product thumbnail"
          className={`cursor-pointer w-full h-full`}
          onClick={() => setCurrentImagePosition(index)}
        />
        {index === currentImagePosition && (
          <div className="bg-white h-full w-full absolute top-0 left-0 bg-opacity-75 z-50"></div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed w-full h-full bg-black bg-opacity-75 flex justify-center items-center flex-col z-40 top-0 left-0">
      <div className="w-1/3">
        <div className="w-full flex justify-end mb-5">
          <img
            src={closeIcon}
            alt="close icon"
            onClick={disable}
            className="cursor-pointer"
          />
        </div>
        <img
          src={images[currentImagePosition]}
          alt="currently selected product"
          className="rounded-lg mb-6 w-full"
        />
        <div className={`inline-grid gap-x-4 grid-cols-4 w-full px-12`}>
          {thumbnails.map((thumbnail, index) => {
            return renderThumbnail(thumbnail, index);
          })}
        </div>
      </div>
    </div>
  );
}
