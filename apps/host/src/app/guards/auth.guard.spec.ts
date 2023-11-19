import { authGuard } from './auth.guard';

describe('AuthGuard', () => {
  let localStorageMock: { [key: string]: string | null };
  let mockRoute: any;
  let mockState: any;

  beforeEach(() => {
    localStorageMock = {}; // Simulación de localStorage
    mockRoute = {}; // Objeto de ruta ficticio
    mockState = {}; // Objeto de estado ficticio
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: (key: string) => localStorageMock[key],
        setItem: (key: string, value: string) => {
          localStorageMock[key] = value;
        },
        removeItem: (key: string) => {
          delete localStorageMock[key];
        },
      },
      writable: true,
    });
  });

  it('should return false if username or password are missing', () => {
    expect(authGuard(mockRoute, mockState)).toBe(false);
  });

  it('should return true if username and password are present', () => {
    localStorageMock['username'] = 'testUser';
    localStorageMock['password'] = 'testPassword';
    expect(authGuard(mockRoute, mockState)).toBe(true);
  });
});
