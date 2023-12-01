import { DataProvider, StringOrNumber } from "data-provider-types";
import { GraphQLClient } from "../GraphQLCLient";
import defaultRequests from "./constants";
import { inject, injectable } from "tsyringe";
import { ComponentResponse } from "@/types";

export interface SectionResponse {
  "name": string,
  "props": {
    "cards": [
      {
        "title": string
      }
    ]
  },
  "title": string
}

export interface GetOneRawResponse
  {
    "data": {
      section:SectionResponse
    }
  }


export interface CMSResolver{
  getOneResolve(rawData: unknown): ComponentResponse<unknown>
}


// TODO: evaluate migration to jest since vitest use vite
// and nextjs configurations use webpack and there could be conflicts
// and false positives related to webpack
// TODO: evaluate DI of queries
@injectable()
export class ContentfulCMSProvider implements DataProvider<ComponentResponse>{
  constructor(
    private client: GraphQLClient, 
    @inject('Resolver') private resolver: CMSResolver, 
    @inject('Request')private requests = defaultRequests
  ){}

  async getOne(id: StringOrNumber, meta: {requestName: string}){
    const { data } = await this.client
      .request(this.requests.getOneQueries[meta.requestName], {
        variables: {
          id: id.toString()
        }
      })

    return this.resolver.getOneResolve(data);
  }
}