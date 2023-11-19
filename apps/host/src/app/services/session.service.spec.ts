import { TestBed } from '@angular/core/testing';

import { SessionService } from './session.service';

describe('SessionService', () => {
  let service: SessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should clear localStorage on beforeunload event', () => {
    // Verifica si localStorage está vacío antes del evento
    expect(localStorage.length).toBe(0);

    // Simula el evento 'beforeunload'
    window.dispatchEvent(new Event('beforeunload'));

    // Verifica si localStorage está vacío después del evento
    expect(localStorage.length).toBe(0);
  });
});
