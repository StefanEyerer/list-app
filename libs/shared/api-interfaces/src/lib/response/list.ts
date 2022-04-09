export interface List {
  id: string;
  name: string;
  description: string;
  items: Array<Record<string, string>>;
}
