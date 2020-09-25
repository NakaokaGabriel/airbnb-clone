import React, { useRef, useState, useCallback } from 'react';
import Slider from 'react-slick';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container, SlideButton } from './styles';

import { reactSlickSettings } from '../../config/carouselConfig';

const Carousel: React.FC = ({ children }) => {
  const customSlider = useRef<Slider>(null);

  const [adventureFocus, setAdventureFocus] = useState<boolean>(false);

  const toggleMouseOver = useCallback(() => {
    setAdventureFocus(true);
  }, []);

  const toggleMouseOut = useCallback(() => {
    setAdventureFocus(false);
  }, []);

  const togglePrev = useCallback(() => {
    if (customSlider.current) {
      customSlider.current.slickPrev();
    }
  }, []);

  const toggleNext = useCallback(() => {
    if (customSlider.current) {
      customSlider.current.slickNext();
    }
  }, []);

  return (
    <Container onMouseOver={toggleMouseOver} onMouseOut={toggleMouseOut}>
      <Slider {...reactSlickSettings} ref={customSlider}>
        {children}
      </Slider>
      <SlideButton focus={adventureFocus}>
        <button type="button" onClick={togglePrev}>
          <RiArrowDropLeftLine size={40} />
        </button>

        <button type="button" onClick={toggleNext}>
          <RiArrowDropRightLine size={40} />
        </button>
      </SlideButton>
    </Container>
  );
};

export default Carousel;
