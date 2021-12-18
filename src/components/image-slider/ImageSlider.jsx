import React, { useState } from "react";
import iconNext from "../../assets/icons/icon-next.svg";
import iconPrevious from "../../assets/icons/icon-previous.svg";
import styles from "./image-slider-styles.module.scss";
import cx from "classnames";
export default function ImageSlider({ images }) {
  const galleryDefault = [
    { image: images[images.length - 1], position: images.length - 1 },
    { image: images[0], position: 0 },
    { image: images[1], position: 1 },
  ];
  const [gallery, setGallery] = useState(galleryDefault);
  const [clickable, setClickable] = useState(true);
  const [direction, setDirection] = useState("right");
  const [animate, setAnimate] = useState(false);
  const readjustGallery = (direction) => {
    let oldGallery = [...gallery];
    if (direction === "right") {
      if (oldGallery[oldGallery.length - 1].position === images.length - 1) {
        oldGallery.shift();
        oldGallery.push({
          image: images[0],
          position: 0,
        });
        setGallery(oldGallery);
      } else {
        oldGallery.shift();
        oldGallery.push({
          image: images[oldGallery[1].position + 1],
          position: oldGallery[1].position + 1,
        });
        setGallery(oldGallery);
      }
    }
    if (direction === "left") {
      if (oldGallery[0].position === 0) {
        oldGallery.pop();
        oldGallery.unshift({
          image: images[images.length - 1],
          position: images.length - 1,
        });
        setGallery(oldGallery);
      } else {
        oldGallery.pop();
        oldGallery.unshift({
          image: images[oldGallery[0].position - 1],
          position: oldGallery[0].position - 1,
        });
        setGallery(oldGallery);
      }
    }
  };
  const transitionAnimation =
    direction === "right" ? styles.slide_right : styles.slide_left;
  const animationClass = cx({
    [transitionAnimation]: animate,
  });
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="relative overflow-hidden w-full h-full min-w-full min-h-full">
        <div
          className={`absolute top-0 left-0 transform -translate-x-full w-full h-full flex ${animationClass}`}
          onAnimationEnd={() => {
            readjustGallery(direction);
            setAnimate(false);
            setClickable(true);
          }}
        >
          {gallery.map((page, index) => {
            return (
              <img
                src={page.image}
                alt=""
                key={index}
                className="min-w-full w-full h-full"
              />
            );
          })}
        </div>
      </div>
      <div
        onClick={() => {
          setDirection("left");
          if (clickable) setAnimate(true);
          setClickable(false);
        }}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 h-8 w-8 flex justify-center items-center bg-white rounded-full"
      >
        <img src={iconPrevious} alt="previous image icon" />
      </div>
      <div
        onClick={() => {
          setDirection("right");
          if (clickable) setAnimate(true);
          setClickable(false);
        }}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 flex justify-center items-center bg-white rounded-full"
      >
        <img src={iconNext} alt="next image icon" />
      </div>
    </div>
  );
}
