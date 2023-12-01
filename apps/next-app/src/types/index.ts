
export interface ResolvedResponse<T = any> {
  data: T;
  error?: any;
}

export interface ComponentMetadata {
  name: string;
  version?: string;
  description?: string;
}

export interface ComponentResponse <R=any, T =any> {
  response: ResolvedResponse<R>;
  metadata: ComponentMetadata;
  extraData?: T;
}
