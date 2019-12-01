import fetch from 'node-fetch';
import { keys, isEmpty } from 'lodash';
import { getCookie } from '@supporters/utils/cookies';

export class RestClient {
  getToken = () => {
    return getCookie('token');
  };

  createUrl = url => {
    // return `${process.env.REACT_APP_BACKEND_HOST}${url}`;
    return `http://localhost:5001${url}`;
  };

  createHeaders() {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.getToken()}`
    };
  }

  async asyncGet(url, query = null) {
    let queryString = '?';
    console.log('query', query);

    if (query) {
      keys(query)
        .filter(key => !isEmpty(query[key]))
        .forEach((field, index) => {
          if (index === 0) {
            queryString += `${field}=${query[field]}`;
          } else {
            queryString += `&${field}=${query[field]}`;
          }
        });
    }
    const res = await fetch(this.createUrl(url + queryString), {
      method: 'GET',
      headers: this.createHeaders()
    });
    const json = await res.text();

    return JSON.parse(json);
  }

  async asyncPost(url, data) {
    const res = await fetch(this.createUrl(url), {
      method: 'POST',
      headers: this.createHeaders(),
      body: JSON.stringify(data)
    });
    const json = await res.text();

    return JSON.parse(json);
  }
}
