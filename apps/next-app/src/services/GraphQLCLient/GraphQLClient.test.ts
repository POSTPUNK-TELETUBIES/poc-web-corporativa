import 'next'
import 'reflect-metadata'
import { describe } from 'node:test'
import { expect, it, vi } from 'vitest'
import { GraphQLClient } from '.'
import { FetchClient } from '../FetchClient'

//@ts-expect-error
import query from './test.gql?raw'

const fetchClient = new FetchClient()

const dummyResponse = {message: 'hola'}


vi.spyOn(fetchClient, 'post').mockImplementation(()=> Promise.resolve({
  json: () =>Promise.resolve(dummyResponse)
}) as any)

const client = new GraphQLClient(fetchClient)

describe('graphql client', ()=>{
  it('request', async ()=>{
    const { data } = await client.request(query);

    expect(data).toEqual(dummyResponse)
  })
})