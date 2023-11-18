import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InfoTableService {
  private url =
    'https://app-academy-neu-codechallenge.azurewebsites.net/api/cut';

  private username = localStorage.getItem('username');
  private password = localStorage.getItem('password');
  private credentials = btoa(`${this.username}:${this.password}`);
  private headers = {
    Authorization: 'Basic ' + this.credentials,
    Accept: 'application/json',
  };

  constructor(private http: HttpClient) {}

  getAllInfo() {
    return this.http.get(this.url, { headers: this.headers });
  }

  getInfo2d() {
    return this.http.get(this.url + '/2', { headers: this.headers });
  }

  getInfo3d() {
    return this.http.get(this.url + '/3', { headers: this.headers });
  }
}
