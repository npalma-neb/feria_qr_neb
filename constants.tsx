import React from 'react';
import { Item } from './types';

export const ITEMS: Item[] = [
  {
    id: 1,
    title: 'Producto 1',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    longDescription: [
      'Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
      'Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.'
    ],
    imageUrl: '/imagen1.jpg',
    videoUrl: 'https://www.youtube.com/embed/tW-nZ2eMlEc'
  },
  {
    id: 2,
    title: 'Producto 2',
    shortDescription: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription: [
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    ],
    imageUrl: '/imagen2.jpg',
    videoUrl: 'https://www.youtube.com/embed/zyWdkmUC8FU'
  },
  {
    id: 3,
    title: 'Producto 3',
    shortDescription: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    longDescription: [
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ],
    imageUrl: '/imagen3.jpg',
    videoUrl: 'https://www.youtube.com/embed/Uc-04Lbt_YE'
  },
  {
    id: 4,
    title: 'Producto 4',
    shortDescription: 'Phasellus viverra nulla ut metus varius laoreet.',
    longDescription: [
      'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.'
    ],
    imageUrl: '/imagen4.jpg',
    videoUrl: 'https://www.youtube.com/embed/v1mGemYlRWQ'
  },
  {
    id: 5,
    title: 'Producto 5',
    shortDescription: 'Curabitur ullamcorper ultricies nisi. Nam eget dui.',
    longDescription: [
      'Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.'
    ],
    imageUrl: '/imagen5.jpg',
    videoUrl: 'https://www.youtube.com/embed/wapadvdLkUE'
  },
  {
    id: 6,
    title: 'Producto 6',
    shortDescription: 'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu.',
    longDescription: [
      'Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.'
    ],
    imageUrl: '/imagen6.jpg',
    videoUrl: 'https://www.youtube.com/embed/7t-ujnGkH4Q'
  }
];


const commonLogoStyles = {
    height: '40px',
    width: 'auto'
};

export const LogoDarkTheme = () => null;
export const LogoLightTheme = () => null;
