import React from 'react';
import { Item } from './types';

export const ITEMS: Item[] = [
  {
    id: 1,
    title: 'SmartEye',
    shortDescription: 'Sistema de monitoreo remoto.',
    longDescription: [
      'Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
      'Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.'
    ],
    imageUrl: '/imagen1.jpg',
    videoUrl: 'https://www.youtube.com/embed/_U_G1s70CwU'
  },
  {
    id: 2,
    title: 'Importancia de intercambiadores de calor y limpieza',
    shortDescription: 'Intercambiadores de calor y limpieza son esenciales para mantener la temperatura y la humedad en el ambiente.',
    longDescription: [
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    ],
    imageUrl: '/imagen2.jpg',
    videoUrl: 'https://www.youtube.com/embed/XWs5YSoyISA'
  },
  {
    id: 3,
    title: 'Limpieza de agua, intercambiadores de calor y filtros',
    shortDescription: 'Limpieza de agua, intercambiadores de calor y filtros son esenciales para mantener la calidad del agua y la temperatura en el ambiente.',
    longDescription: [
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ],
    imageUrl: '/imagen3.jpg',
    videoUrl: 'https://www.youtube.com/embed/zJ5BlKM4L3o'
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
