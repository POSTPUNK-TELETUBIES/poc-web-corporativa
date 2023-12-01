export type StringOrNumber = string | number;

export interface SyncDataProvider<T = any, R = any, U = any> {
  syncCreate?(data: R , meta?: any): T | void;
  syncCreateMany?(data: R [], meta?: any): T[] | void;
  syncGetOne?(id: StringOrNumber, meta?: any): T | null;
  syncGetMany?(ids: StringOrNumber[], meta?: any): T[];
  syncUpdate?(data: U, meta?: any): T | void;
  syncUpdateMany?(data: U[], meta?: any): T[] | void;
  syncDeleteOne?(id: StringOrNumber, meta?: any): void;
  syncDeleteMany?(ids: StringOrNumber[], meta?: any): void;
  syncBulkGetMany?(filter: Filtering, options?: GetManyOptions, meta?: any): T[];
  syncBulkDelete?(filter: Filtering, meta?: any): void;
}

export interface AsyncDataProvider<T = any, R = any, U = any> {
  create?(data: R, meta?: any): Promise<T | void>;
  createMany?(data: R[], meta?: any): Promise<T[] | void>;
  getOne?(id: StringOrNumber, meta?: any): Promise<T | null>;
  getMany?(ids: StringOrNumber[], meta?: any): Promise<T[]>;
  update?(data: U, meta?: any): Promise<T | void>;
  updateMany?(data: U[], meta?: any): Promise<T[] | void>;
  deleteOne?(id: StringOrNumber, meta?: any): Promise<void>;
  deleteMany?(ids: StringOrNumber[], meta?: any): Promise<void>;
  bulkGetMany?(filter: Filtering, options?: GetManyOptions, meta?: any): Promise<T[]>;
  bulkDelete?(filter: Filtering, meta?: any): Promise<void>;
}

export interface Sorting {
  field: string;
  order: 'asc' | 'desc';
}

export interface Filtering {
  field: string;
  value: any;
  operator: 'equals' | 'contains' | 'startsWith' | 'endsWith';
}

export interface Pagination {
  page: number;
  pageSize: number;
}

export interface GetManyOptions {
  sorting?: Sorting;
  filtering?: Filtering;
  pagination?: Pagination;
}

export type DataProvider<
  T = any, 
  R = any, 
  U = any
> = SyncDataProvider<T, R, U> 
  & AsyncDataProvider<T, R, U>;
