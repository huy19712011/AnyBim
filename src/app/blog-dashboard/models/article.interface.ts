export interface Article {
  id: number,
  title: string,
  key: string,
  date: Date,
  content: Text,
  description: Text,
  imageUrl: string,
  viewCount: number,
  createdAt: Date,
  updatedAt: Date,
}

// export class Article {
//   id: number;
//   title: string;
//   key: string;
//   date: Date = new Date();
//   content: Text;
//   description: Text;
//   imageUrl: string;
//   viewCount: number;
//   createdAt: Date;
//   updatedAt: Date;
// }