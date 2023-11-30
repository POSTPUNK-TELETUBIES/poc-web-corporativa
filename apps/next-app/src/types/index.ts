
export interface ResolvedResponse<T = any> {
  data: T;
  error?: any;
}

export interface ComponentMetadata {
  name: string;
  version?: string;
  description?: string;
}

export interface ComponentResponse <T =any> {
  response: ResolvedResponse;
  metadata: ComponentMetadata;
  extraData?: T;
}
