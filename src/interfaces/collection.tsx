export default interface ICollection {
  id: number;
  title: String;
  thumbnail: Array<IThumbnail>;
  year: number;
  category: String;
  rating: String;
  isTrending: Boolean;
}

interface IThumbnail {
  trending: Array<string>;
  regular: Array<string>;
}
