import { List } from './list';

export interface Share {
  id: string;
  accessKey: string;
  list: Partial<List>;
}
