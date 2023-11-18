import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url =
    'https://app-academy-neu-codechallenge.azurewebsites.net/api/cut';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const credentials = Buffer.from(`${username}${password}`).toString(
      'base64'
    );
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(`${username}:${password}`),
      Accept: 'application/json',
    });
    return this.http.get(this.url, { headers });
  }
}
