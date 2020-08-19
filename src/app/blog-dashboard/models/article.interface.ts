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
  published: boolean,
}

// export class Article {
//   id?: number;
//   title: string;
//   key: string;
//   date: Date = new Date();
//   content: string;
//   description: string;
//   imageUrl: string;
//   viewCount: number;
//   createdAt?: Date;
//   updatedAt?: Date;
//   published?: boolean;
// }