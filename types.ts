export interface Item {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string[];
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
