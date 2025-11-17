export interface Item {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string[];
  imageUrl: string;
  videoUrl: string;
  videoAspect?: 'portrait' | 'landscape';
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
