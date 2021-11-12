import axios, { AxiosPromise, AxiosResponse } from 'axios';

interface HasId {
  id?: number;
}
class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}
  fetch = (id: number): AxiosPromise<T> => axios.get(`${this.rootUrl}/${id}`);

  save = (data: T): AxiosPromise<T> =>
    data.id
      ? axios.put(`${this.rootUrl}/${data.id}`, data)
      : axios.post(this.rootUrl, data);
}

export { ApiSync };
