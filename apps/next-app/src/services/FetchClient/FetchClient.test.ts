
import 'next';
import 'reflect-metadata'
import { describe, expect, it } from 'vitest';
import { FetchClient } from '.';

const fetchClient =  new FetchClient({
  baseURL: 'https://stackoverflow.com'
});

// TODO: add msw
describe('FetchClient', () => {
  it('should make a GET request', async () => {
    const response = await fetchClient.get('/questions', {
      params: {
        a: 'adasdsa'
      }
    });
    
    const data = await response.text();

    expect(response.url).toBe('https://stackoverflow.com/questions?a=adasdsa')
    expect(response.status).toBe(200);
    expect(data).contains('Stack Overflow')
  });
});

