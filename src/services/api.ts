import axios from 'axios';

export interface Response {
  id: number;
  name: string;
  attending: boolean;
  comments: string;
  updatedAt: Date;
}

let responses: Response[] = [];

export const getResponses = async (): Promise<Response[]> => {
  return responses;
};

export const addResponse = async (response: Response): Promise<Response> => {
  response.id = responses.length + 1;
  response.updatedAt = new Date();
  responses.push(response);
  return response;
};

export const updateResponse = async (id: number, response: Response): Promise<Response> => {
  const index = responses.findIndex(r => r.id === id);
  if (index !== -1) {
    responses[index] = { ...response, id, updatedAt: new Date() };
  }
  return responses[index];
};
