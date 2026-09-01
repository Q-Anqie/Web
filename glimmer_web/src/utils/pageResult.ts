export interface PageResult<T> {
  current: number;
  pages: number;
  size: number;
  total: number;
  records: T[];
}
