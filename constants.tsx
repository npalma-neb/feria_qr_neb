import React from 'react';
import { Item } from './types';

export const ITEMS: Item[] = [
  {
    id: 1,
    title: 'Objeto Uno: El Innovador',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    longDescription: [
      'Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.',
      'Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
      'Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam. Sorbi et per conubia nostra, per inceptos himenaeos.'
    ],
  },
  {
    id: 2,
    title: 'Objeto Dos: El Confiable',
    shortDescription: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
    longDescription: [
      'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.',
      'Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.'
    ],
  },
  {
    id: 3,
    title: 'Objeto Tres: El Versátil',
    shortDescription: 'Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo.',
    longDescription: [
        'Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed, nulla. Donec porta diam eu massa. Quisque diam lorem, interdum vitae, dapibus ac, scelerisque vitae, pede. Donec eget tellus non erat lacinia fermentum.',
        'Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque sed dolor. Aliquam congue fermentum nisl. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet.'
    ],
  },
];


const commonLogoStyles = {
    height: '40px',
    width: 'auto'
};

export const LogoDarkTheme = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" style={commonLogoStyles}>
        <circle cx="50" cy="50" r="48" fill="#E6C029" />
        <path d="M 35 75 C 35 50, 65 50, 65 75 M 65 25 C 65 50, 35 50, 35 25" stroke="#000000" strokeWidth="4" fill="none" />
        <text x="105" y="70" fontFamily="sans-serif" fontSize="60" fill="#E6C029" fontWeight="300">neb</text>
    </svg>
);


export const LogoLightTheme = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" style={commonLogoStyles}>
        <circle cx="50" cy="50" r="48" fill="#000000" />
        <path d="M 35 75 C 35 50, 65 50, 65 75 M 65 25 C 65 50, 35 50, 35 25" stroke="#E6C029" strokeWidth="4" fill="none" />
        <text x="105" y="70" fontFamily="sans-serif" fontSize="60" fill="#E6C029" fontWeight="300">neb</text>
    </svg>
);
