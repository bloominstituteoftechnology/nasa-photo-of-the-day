import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import './Photo.scss';
import {Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption} from 'reactstrap';

    const items = [
        {
          src: <PhotoCard 
          props={photos.hdurl}  />
          altText: 'Slide 1',
          caption: 'Slide 1'
        },
       
      ];
      
      const Example = (props) => {
        const [activeIndex, setActiveIndex] = useState(0);
        const [animating, setAnimating] = useState(false);
      
        const next = () => {
          if (animating) return;
          const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
          setActiveIndex(nextIndex);
        }
      
        const previous = () => {
          if (animating) return;
          const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
          setActiveIndex(nextIndex);
        }
      
        const goToIndex = (newIndex) => {
          if (animating) return;
          setActiveIndex(newIndex);
        }
      
        const slides = items.map((item) => {
          return (
            <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} />
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
          );
        });
      
        return (
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        );
      }
      
      export default Example;