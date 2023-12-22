import React, { useState } from 'react';
import { projects } from './projectdata';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
//import './carousel.css';


const CarouselInner = ({ title, images }) => {
  return (
      <div className="carousel">
          {images.map((image, index) => (
              <div key={index} className="slide">
                  <GlassMagnifier
                      imageSrc={image}
                      style={{ zIndex: 0, border: "3px solid #B3A369", borderRadius: "5px", width: "100%" }}
                      imageAlt={`${title} ${index}`}
                      largeImageSrc={src}
                      magnifierBorderColor="#002233"
                      square={true}
                  />
              </div>
          ))}
      </div>
  );
};

export default CarouselInner;