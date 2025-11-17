import React from 'react';
import { Item } from './types';

export const ITEMS: Item[] = [
  {
    id: 1,
    title: 'Importancia de intercambiadores de calor y limpieza',
    shortDescription: 'Los pulmones de tu central de agua caliente. Cuídalos como se merecen.',
    longDescription: [
      '1) Intercambiadores de calor: Al calentar el agua, esta desprende minerales, mas conocidos como sarro. Este se aloja en tus intercambiadores de calor que son los “Pulmones” de tu instalación. Estos se saturan evitando el intercambio de calor, dejando tu central sin la capacidad de entregar agua caliente.'
    ],
    imageUrl: '/imagen2.jpeg',
    videoUrl: 'https://drive.google.com/file/d/15bpAcRuGd7ZezwfwPumx5Cr8DkZc8G5U/preview',
    videoAspect: 'portrait'
  },
  {
    id: 2,
    title: 'Limpieza de agua, intercambiadores de calor y filtros',
    shortDescription: 'No solo basta con generar agua caliente, también debemos asegurar de que llegue a cada punto de tu edificio.',
    longDescription: [
      '2) Distribución de agua caliente: Muchas veces el problema no está en la sala de calderas. El sarro que se produce en la central viaja por toda la red del edificio, ¡alojándose en los lugares menos pensados! Es muy importante la limpieza de los puntos críticos, donde una obstrucción puede significar el fin del suministro de agua caliente a tu departamento, quizás a tu piso o, en el peor de los casos, a tu edificio completo.'
    ],
    imageUrl: '/imagen3.jpeg',
    videoUrl: 'https://drive.google.com/file/d/1XQGRA-RnZ_ysLYgKvVcSbD4t3SBESk7I/preview',
    videoAspect: 'portrait'
  },
  {
    id: 3,
    title: 'SmartEye',
    shortDescription: 'Un paso mas cerca de la omnipresencia en tu instalación.',
    longDescription: [
      '3) SmartEye: ¡Cuando nuestros técnicos terminan su trabajo, NEB no se detiene! Nuestro sistema de monitoreo sigue en línea, evaluando en tiempo real la temperatura de suministro y otros parámetros de importancia para asegurar la continuidad operativa de tu central. Disponible para todos nuestros clientes. ¡Si tu edificio está enfermo, nosotros nos encargamos de diagnosticarlo y así poder conocer donde está la falla!'
    ],
    imageUrl: '/imagen1.jpeg',
    videoUrl: 'https://drive.google.com/file/d/1E9fSNGs4j0sETg5n7EIydRmBJwBIftKD/preview',
    videoAspect: 'portrait'
  }
];


const commonLogoStyles = {
    height: '40px',
    width: 'auto'
};

export const LogoDarkTheme = () => null;
export const LogoLightTheme = () => null;
