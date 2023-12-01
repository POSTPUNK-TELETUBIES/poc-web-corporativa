import { RequestInit as NextJSRequestInit} from "next/dist/server/web/spec-extension/request";
import { inject, injectable } from "tsyringe";

export interface RequestInit extends NextJSRequestInit{
  baseURL?: string;
  params?: Record<string, string>
}

// TODO: evaluate migrating this to a library
@injectable()
export class FetchClient{
  private baseURL?: string;

  constructor(@inject('FetchOptions') private defaultOptions: RequestInit = {}){
    this.baseURL = defaultOptions.baseURL
  }

  // TODO: merging headers potentially bug
  // because if headers is Headers object it does not have enumerable properties
  private mergeOptions(options: RequestInit = {}):RequestInit {
    return {
      ...this.defaultOptions,
      ...options,
      headers: {...this.defaultOptions.headers, ...options.headers}
    }
  }

  private resolvePath(path: string, params: Record<string, string> = {}){
    const resolvedParams = new URLSearchParams(params).toString()
    const url = new URL(path + '?' + resolvedParams, this.baseURL)
  
    return url.toString()
  }

  async request(path: string, method: string, options?: RequestInit){
    return await fetch(this.resolvePath(path, options?.params), {
      ...this.mergeOptions(options),
      method
    })
  }

  async get(path: string, options?: RequestInit){
    return await this.request(path, 'GET', options)
  }

  async post(path: string, options?: RequestInit){
    return await this.request(path, 'POST', options)
  }

  async put(path: string, options?: RequestInit){
    return await this.request(path, 'PUT', options)
  }

  async delete(path: string, options?: RequestInit){
    return await this.request(path, 'DELETE', options)
  }

  async patch(path: string, options?: RequestInit){
    return await this.request(path, 'PATCH', options)
  }
}
  