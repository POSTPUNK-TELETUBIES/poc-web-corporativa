import { type DataProvider, StringOrNumber } from "data-provider-types";
import { inject, singleton } from "tsyringe";

import pino from 'pino'
import { ComponentResponse } from "@/types";

// TODO: create a interface for data providers that requires only read operations for CMS

@singleton()
export class ErrorProxyCMS implements DataProvider{
  static logger = pino()

  constructor(
    @inject('CurrentCms') private currentCMSProvider: DataProvider,
    @inject('FallbackCms') private fallbackCMSProvider: DataProvider,
  ){}

  async getOne<T = unknown>(id: StringOrNumber, meta?: any):Promise<ComponentResponse<T>> {
    try {
      if(!this.currentCMSProvider.getOne)
        throw new Error('Not implemented')

      return await this.currentCMSProvider.getOne(id, meta)
    } catch (error) {
      ErrorProxyCMS.logger.error(error);

      if(!this.fallbackCMSProvider.getOne)
        throw new Error('Not implemented')
  
      return await this.fallbackCMSProvider.getOne(id, meta);
    }
  }
}