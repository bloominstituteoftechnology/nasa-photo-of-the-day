import React, {useState} from 'react';
import styled from 'styled-components';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

  const CarouselStyle = styled.div`
  background: black;
  color: white;
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  min-height: 100px;
    `;

  const Example = (props) => {
  
  const items = [
    {
      caption: 'NASA Photo of the Day'
    },
    {
      caption: `${props.title}`,
      date: `${props.date}`
    },
    {
      caption: `${props.explanation}`
    },
    {
      caption: `Copyright: ${props.copyright}`
     
    }
    
  ];
  
 
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
          key={item.caption}
        >
          {item.caption} 
          <p>{item.date}</p>
          {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
        </CarouselItem>
        
      );
    });
  
    return (
      
      <CarouselStyle>
    
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
    
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      </CarouselStyle>
    );
  }
  
  export default Example;