import { Settings } from 'react-slick';

export const reactSlickSettings = {
  infinite: true,
  slidesToShow: 7,
  dots: true,
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
        slidesToShow: 5,
      },
    },
  ],
} as Settings;
