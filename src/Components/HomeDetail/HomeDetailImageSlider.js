import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "../../UI/Image/Image";
import "keen-slider/keen-slider.min.css";
import classes from "./HomeDetailImageSlider.module.css";
import Camera from "../../Assets/SVG/Camera";
import Favorites from "../../Components/Favorites/Favorites";

const HomeDetailImageSlider = (props) => {
  const [currentImage, setCurrentImage] = useState(1);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentImage(s.details().relativeSlide + 1);
    },
  });
  const photos = props.images;
  const openHouseDt = props.openHouseDate !== '' && new Date(props.openHouseDate);

  return (
    <>
      <div className={classes.sliderWrapper}>
        {photos.length > 0 ? (
          <>
            <div ref={sliderRef} className="keen-slider">
              {photos.map(({ description, href }, idx) => {
                return (
                  <div
                    className={`keen-slider__slide number-slide${idx}`}
                    key={idx}
                  >
                    <Image
                      alt={description}
                      imgClass="sliderImage"
                      src={href}
                    />
                  </div>
                );
              })}
            </div>
            {slider && (
              <>
                <ArrowLeft
                  onClick={(e) => e.stopPropagation() || slider.prev()}
                />
                <ArrowRight
                  onClick={(e) => e.stopPropagation() || slider.next()}
                />
              </>
            )}
            <div className={classes.flagContainer}>
              {props.newFl && <div className={classes.newFlag}>NEW</div>}
              {props.openHouseDate !== "" && (
                <div className={classes.openHouse}>
                  OPEN HOUSE - {openHouseDt.toLocaleDateString()}
                </div>
              )}
            </div>
            <div className={classes.slideNumber}>
              <Camera /> {currentImage} / {photos.length}
            </div>
          </>
        ) : (
          <div>No images to show</div>
        )}
        <div className={classes.buttonRow}>
          <Favorites
            className={classes.buttonRowButton}
            propertyId={props.propertyId}
            type="light"
          />
          <button className={classes.buttonRowButton}>
            <Camera />
          </button>
        </div>
      </div>
    </>
  );
};

function ArrowLeft(props) {
  return (
    <svg
      onClick={props.onClick}
      className={`${classes.arrow} ${classes["arrow--left"]}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowRight(props) {
  return (
    <svg
      onClick={props.onClick}
      className={`${classes.arrow} ${classes["arrow--right"]}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}

export default HomeDetailImageSlider;
