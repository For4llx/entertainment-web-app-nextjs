export interface ICollection {
  id: number;
  title: string;
  thumbnail: Array<IThumbnail>;
  year: number;
  category: string;
  rating: string;
  isTrending: boolean;
}

export interface IThumbnail {
  trending: IImage;
  regular: IImage;
}

export interface IImage {
  small: string;
  medium: string;
  large: string;
}
