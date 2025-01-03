import { HttpClient, HttpHeaders } from '@angular/common/http';
import { afterRender, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MotherService {
  domain = 'http://185.53.141.144:81/api/';
  localStorage: any;

  constructor(private http: HttpClient) {
    afterRender(() => {
      this.localStorage = localStorage;
    });
  }

  get(api = '') {
    const accessToken = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'Cache-Control': 'no-cache',
        Accept: 'application/json',
      }),
    };
    return this.http.get(this.domain + api, httpOptions);
  }

  noAuthGet(api = '') {
    const accessToken = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Accept: 'application/json',
      }),
    };
    return this.http.get(this.domain + api, httpOptions);
  }

  post(api = '', body: any = '') {
    const accessToken = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      }),
    };
    return this.http.post(this.domain + api, body, httpOptions);
  }

  postBasicAuth(api = '', body = '') {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa('web-ui:admin'),
        Accept: 'application/json',
      }),
    };
    return this.http.post(this.domain + api, body, httpOptions);
  }

  patch(api = '', body = '') {
    const accessToken = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      }),
    };
    return this.http.patch(api, body, httpOptions);
  }

  delete(api = '', body = '') {
    const accessToken = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      }),
      body: body,
    };
    return this.http.delete(this.domain + api, httpOptions);
  }

  put(api = '', body = '') {
    const accessToken = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      }),
    };
    return this.http.put(this.domain + api, body, httpOptions);
  }

  upload(api = '', body = '') {
    const accessToken = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${accessToken}`,
      }),
    };

    return this.http.post(this.domain + api, body, httpOptions);
  }

  getDomain() {
    return this.domain;
  }
}
