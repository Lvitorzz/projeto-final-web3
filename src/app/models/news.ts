export interface News {
  id?: number;
  date: Date;
  title: string;
  content: string;
  tags: string[];
  coverImageUrl?: string;
}