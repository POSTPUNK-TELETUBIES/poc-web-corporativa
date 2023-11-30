import { DataProvider, StringOrNumber } from "data-provider-types";
import { GraphQLClient } from "../GraphQLCLient";
import defaultRequests from "./constants";
import { inject, injectable } from "tsyringe";
import { ComponentResponse } from "@/types";


export interface GetOneRawResponse{
  data: {
    name: string
  }
}

export interface CMSResolver<RawData>{
  getOneResolve<T= unknown>(rawData: RawData): ComponentResponse<T>
}


// TODO: evaluate migration to jest since vitest use vite
// and nextjs configurations use webpack and there could be conflicts
// and false positives related to webpack
// TODO: evaluate DI of queries
@injectable()
export class ContentfulCMSProvider implements DataProvider<ComponentResponse>{
  constructor(
    private client: GraphQLClient, 
    @inject('Resolver') private resolver: CMSResolver<GetOneRawResponse>, 
    private requests = defaultRequests
  ){}

  async getOne(id: StringOrNumber, meta?: any){
    const { data } = await this.client.request<GetOneRawResponse>(this.requests.getOneQuery)

    return this.resolver.getOneResolve(data);
  }
}