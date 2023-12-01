import { singleton } from "tsyringe"
import { FetchClient, RequestInit } from "../FetchClient"

interface RequestOptions{
  fetchClientOptions?: RequestInit,
  variables?: Record<string, string>
}

@singleton()
export class GraphQLClient{
  constructor(private client: FetchClient){}

  // TODO: refactor in order to merge headers more clearly
  async request<DataT = any>(gql: string, options?: RequestOptions){
    const response =  await this.client.post('', {
      ...options?.fetchClientOptions,
      headers:{
        ...options?.fetchClientOptions?.headers, 
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        query: gql,
        variables: options?.variables
      })
    })

    return {
      data: await response.json() as DataT,
      response
    }
  }
}