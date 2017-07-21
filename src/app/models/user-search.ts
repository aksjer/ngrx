import { User } from './user';

export interface UserSearch {
  term: string;
  users: User[];
}
