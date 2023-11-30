import '@testing-library/jest-dom';
import 'reflect-metadata'
import { ComponentResponse } from '@/types';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LocalCMSProvider } from '.';
import data from '../../../mock/data/test.cms.data.json'

const dummyResponse: ComponentResponse = {
  metadata:{
    name: 'Component test',
  },
  response:{
    data: {
      fakeProp: 'fakeProp'
    }
  }
}

const localCmsProvider = new LocalCMSProvider({
  test: {
    staticData: data,
  }
});

const fakeFetch = () => localCmsProvider.getOne('../../../mock/data/test.cms.data.json');

export const FakeComponent = async ()=>{
  const data = await fakeFetch();

  return <p>{data?.metadata.name}</p>
}

describe.concurrent('Local CMS provider', ()=>{
  it('get one async', async ()=>{
    const response = await fakeFetch();
    
    expect(response).toEqual(dummyResponse);
  })

  it('get one sync', ()=>{
    const response = localCmsProvider.syncGetOne('test');    

    expect(response).toEqual(dummyResponse);
  })

  it('renders data', async ()=>{
    const jsxData = await FakeComponent();

    render(jsxData);

    const element = screen.getByText('Component test');
    
    expect(element).toBeInTheDocument();
  })
})