import axios from 'axios';

export const getData = async (url: string): Promise<string> => {
  const request = await axios.get(url);
  return request.data;
};
