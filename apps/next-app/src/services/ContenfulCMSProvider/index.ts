import { DataProvider } from "data-provider-types";
import { RequestInit } from "next/dist/server/web/spec-extension/request";

class FetchClient{
  constructor(private defaultOptions: RequestInit){}

  private mergeOptions(options: RequestInit = {}){
    return {
      ...this.defaultOptions,
      ...options
    }
  }

  async request(path: string, method: string, options?: RequestInit){
    return await fetch(path, {
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

export class ContenfulCMSProvider implements DataProvider{
  constructor(private client: FetchClient){}

  getOne(id: StringOrNumber, meta?: any): Promise<unknown> {
      const response = this.client.post()
  }


}