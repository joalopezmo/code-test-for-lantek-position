import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService],
    });
    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes después de cada prueba
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should send a GET request with credentials', () => {
    const mockResponse = {
      /* Mock response data */
    };
    const username = 'testUser';
    const password = 'testPassword';

    service.login(username, password).subscribe((response) => {
      expect(response).toEqual(mockResponse); // Verifica si la respuesta coincide con la esperada
    });

    const req = httpMock.expectOne(
      'https://app-academy-neu-codechallenge.azurewebsites.net/api/cut'
    );
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toBeTruthy();
    expect(req.request.headers.get('Accept')).toBe('application/json');

    req.flush(mockResponse); // Simula la respuesta del servidor
  });
});
