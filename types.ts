export interface Item {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string[];
  imageUrl: string;
  videoUrl: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
