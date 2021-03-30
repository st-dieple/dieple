import axios, { AxiosResponse } from 'axios';
export { ENDPOINT } from './endpoint';

export class APIService {

  constructor() {
    axios.defaults.baseURL = 'https://us-central1-react-final-project-169bd.cloudfunctions.net/';
    // this.setCommonHeader();
    // this.setInterceptors()
  }

  setCommonHeader() {
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS';
    axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type';
  }

  setInterceptors() {
    axios.interceptors.request.use((request) => {
      request.headers['access-token'] = localStorage.getItem('ACCESS_TOKEN');
      return request;
    }, (error) => {
      return Promise.reject(error);
    });
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        // handle error
        if ( error.response && error.response.status === 401 ) {
          return Promise.reject( error );
        }
      });
  }

  public createURL(uri: (string|object)[]) {
    let paramsUrl;
    if (typeof uri[uri.length - 1] !== 'string') {
      paramsUrl = uri.pop();
      let url = uri.join('/');
      Object.keys(paramsUrl).forEach(x => {
        url = url.replace(`:${x}`, paramsUrl[x]);
      });
      return url;
    } else {
      return uri.join('/');
    }
  }

  public get(uri: (string|object)[], options = {}) {
    return new Promise((resolve, reject) => {
      axios.get(this.createURL(uri), {
        params: options,
      })
      .then((resp: AxiosResponse) => {
        resolve(resp.data);
      })
      .catch((err: any) => {
        reject(err);
      });
    });
  }

  public post(uri: (string|object)[], data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(this.createURL(uri), data)
        .then((resp: AxiosResponse) => {
          resolve(resp.data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }

  public put(uri: (string|object)[], data = {}) {
    return new Promise((resolve, reject) => {
      axios.put(this.createURL(uri), data)
        .then((resp: AxiosResponse) => {
          resolve(resp.data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }

  public delete(uri: (string|object)[]) {
    return new Promise((resolve, reject) => {
      axios.delete(this.createURL(uri))
        .then((resp: AxiosResponse) => {
          resolve(resp.data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }

  public multipeGets(apiRequests: any) {
    const apiReqs = apiRequests.map((v: any) =>
      axios.get(v),
    );
    return new Promise( ( resolve, reject ) => {
      axios.all(apiReqs)
        .then((resp: AxiosResponse[]) => {
          resolve(resp.map((v: any) => v.data ));
        })
        .catch((err: any) => reject(err));
    });
  }

}
