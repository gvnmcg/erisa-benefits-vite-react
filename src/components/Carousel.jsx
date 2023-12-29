import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import items from "./items";

import "./carousel.css";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      // keep idx from going below 0
      newIndex = 0;
    } else if (newIndex >= items.length) {
      // keep idx from going beyond length of array
      newIndex = items.length - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className='carousel-container'>
      <div className='carousel'>
        <div
          className='inner'
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <CarouselItem key={index} item={item} />
          ))}
        </div>
        <div className='carousel-buttons'>
          <button
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
            className='button-arrow'
          >
            <span className={`material-symbols-outlined`}>arrow_back_ios</span>
          </button>
          <div className='indicators'>
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  updateIndex(index);
                }}
                className='indicator-buttons'
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
            className='button-arrow'
          >
            <span className='material-symbols-outlined'>arrow_forward_ios</span>
          </button>
        </div>
      </div>

      <div className='vertical-list'>
        {items.map((item, index) => (
          <div
            key={index}
            className={`list-item ${
              index === activeIndex ? "list-item-active" : ""
            }`}
            onClick={() => updateIndex(index)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};
