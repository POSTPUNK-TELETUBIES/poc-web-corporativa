import { describe, expect, it, vi } from "vitest";
import "reflect-metadata";
import { ErrorProxyCMS } from "..";
import pino from "pino";

// TODO: Mark as optional pino - pretty

ErrorProxyCMS.logger = pino(pino.destination({
  dest: './test.log',
  sync: true
}))

const getOneFallback = vi.fn((id: string)=>Promise.resolve({id}))
const getOneWithError = vi.fn((id: string)=> {throw new Error(id)})
const getOneNoError = vi.fn((id: string)=>Promise.resolve({id: `no-error-${id}`}))

const fallbackProvider = {
  getOne: getOneFallback
}

const providerWithError = {
  getOne: getOneWithError
}

const providerNoError = {
  getOne: getOneNoError
}

const proxyError = new ErrorProxyCMS(
  providerWithError,
  fallbackProvider
)

const proxyNoError = new ErrorProxyCMS(
  providerNoError,
  fallbackProvider
)

describe('Proxy error', ()=>{
  // TODO: one expect per test
  it('get one with error', async ()=>{
    const id = Math.random()
    const data = await proxyError.getOne(id)

    expect(getOneFallback).toBeCalled()
    expect(getOneFallback).toHaveLastReturnedWith({id})
    expect(data).toEqual({id})
  })

  it('get one no error', async ()=>{
    const id = Math.random()
    const data = await proxyNoError.getOne(id)

    expect(getOneFallback).toBeCalledTimes(1);
    expect(data).toEqual({id: `no-error-${id}`})
  })
})