import 'reflect-metadata'
import { describe, expect, it, vi } from "vitest";
import { CMSResolver, ContentfulCMSProvider, GetOneRawResponse } from ".";
import { GraphQLClient } from "../GraphQLCLient";
import { FetchClient } from "../FetchClient";
//@ts-expect-error
import getOneQuery from './getOne.gql?raw'

// TODO: evaluate using jest instead of vitest to avoid mocking import
vi.mock('./constants', ()=>({
  default:{
    getOneQuery: 'adasdsad'
  }
}))

const graphqlClient = new GraphQLClient(new FetchClient())

const dummyData = {message: 'hola'}

vi.spyOn(graphqlClient, 'request').mockImplementation(()=>Promise.resolve({
  data: dummyData,
  response: {} as any
}))

const resolver: CMSResolver<GetOneRawResponse> = {
  getOneResolve(rawData) {
    return {
      response:{
        data: rawData
      },
      metadata: {
        name: 'asdsad'
      }
    }
  },
}

const provider = new ContentfulCMSProvider(graphqlClient, resolver, {
  getOneQuery
})

describe('contentful', ()=>{
  it('Get one', async ()=>{
    const {response: {data}} = await provider.getOne(Math.random())

    expect(data).toEqual(dummyData)
  })
})