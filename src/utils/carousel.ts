import { Settings } from 'react-slick';

export const reactSlickSettings = {
  infinite: false,
  slidesToShow: 6,
  dots: false,
  draggable: false,
  rows: 1,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 368,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
} as Settings;
