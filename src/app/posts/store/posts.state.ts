import { Ipost } from '../interfaces/posts.interface';

export interface IpostState {
  isLoading: boolean;
  posts: Ipost[];
  error: string | null;
}
