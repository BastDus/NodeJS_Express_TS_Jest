import fetch from 'node-fetch';

export const getData = async (url: string): Promise<string[]> => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};