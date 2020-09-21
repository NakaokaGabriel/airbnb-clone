import { Settings } from 'react-slick';

export const reactSlickSettings = {
  infinite: false,
  slidesToShow: 7,
  dots: false,
  draggable: false,
  rows: 1,
  responsive: [
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 6,
      },
    },
  ],
} as Settings;
