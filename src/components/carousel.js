import React, { useState } from 'react';
import Card from './card'
import { projects } from './projectdata';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import './carousel.css';


const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [left, setLeft] = useState(false);
  const length = projects.length;

//  const [prev, setPrev] = useState(length - 1)

  const handlePrevious = () => {
    //setPrev(index)
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
    setLeft(false)
  };

  const handleNext = () => {
    //setPrev(index)
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
    setLeft(true);
  };

  return (
    <>
    <div className="dots">
        {projects.map((proj, n) => {
            if (n === index) {
                return <p className="active-dot">•</p>;
            } else {
                return <p className="inactive-dot">•</p>;
            }
        })}
    </div>
    <div className='conta'>
        <FontAwesomeIcon
            onClick={handlePrevious}
            className="leftBtn"
            icon={faChevronLeft}
            />
        <div className='card-container'>
            {projects.map((proj, n) => {
                let position = (n > index) ? "nextCard"
                    : n === index ? "activeCard" : "prevCard";
                if (position === "activeCard") {
                    if (left) {
                        position = "activeCardLeft"
                    } else {
                        position = "activeCardRight"
                    }
                }
                //if (n === prev && left) {// Right button
                //    position = "nextCardMove"
                //} else if (n === prev && !left) {
                //    position = "prevCardMove"
                //}
                return <Card {...proj} cardStyle={position} />;
            })}
        </div>
        <FontAwesomeIcon
            onClick={handleNext}
            className="rightBtn"
            icon={faChevronRight}
        />
    </div>
    </>
  );
};

export default Carousel;