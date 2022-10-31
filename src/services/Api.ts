import axios from 'axios';
import {RenderError} from '../utils';

class Api {
  static handleStatus(callback: Function, response: any) {
    const result = response.data;
    if (response.status !== 200) {
      this.handleException(response);
    } else {
      this.handleResponse(callback, result);
    }
  }

  static handleException(ex: Error) {
    RenderError(ex.message);
  }

  static handleResponse(callback: Function, response: any) {
    callback(response);
  }

  static async get(api: string, callback: Function) {
    await axios
      .get(api)
      .then(response => {
        this.handleStatus(callback, response);
      })
      .catch(e => {
        this.handleException(e);
      });
  }
}

export default Api;
