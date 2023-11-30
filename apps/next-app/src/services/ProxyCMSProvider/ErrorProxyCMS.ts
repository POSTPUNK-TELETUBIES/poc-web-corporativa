import { type DataProvider, StringOrNumber } from "data-provider-types";
import { inject, singleton } from "tsyringe";

import pino from 'pino'

// TODO: create a interface for data providers that requires only read operations for CMS

@singleton()
export class ErrorProxyCMS<T = unknown, R = unknown, U = unknown> implements DataProvider<T, R, U>{
  static logger = pino()

  constructor(
    @inject('CurrentCms') private currentCMSProvider: DataProvider<T, R, U>,
    @inject('FallbackCms') private fallbackCMSProvider: DataProvider<T, R, U>,
  ){}

  async getOne(id: StringOrNumber, meta?: any): Promise<T | null> {
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