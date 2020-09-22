import { Settings } from 'react-slick';

export const reactSlickSettings = {
  infinite: false,
  slidesToShow: 7,
  dots: false,
  draggable: false,
  rows: 1,
  responsive: [
    {
      breakpoint: 468,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 628,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 968,
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
      breakpoint: 1220,
      settings: {
        slidesToShow: 5,
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
