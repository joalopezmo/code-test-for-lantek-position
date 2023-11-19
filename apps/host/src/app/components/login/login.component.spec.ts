import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LoginService } from '../../services/login.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [LoginService, provideAnimations()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call console.log at the submit', async () => {
    //Se crea un espía para el método login del servicio
    const spy = jest.spyOn(loginService, 'login');
    // Se establecen valores en los controles del formulario
    component.usernameControl.setValue('testUser');
    component.passwordControl.setValue('testPassword');
    const mockConsoleLog = jest.spyOn(console, 'log');
    // Se llama al método onSubmit del componente
    component.onSubmit(new Event('submit'));
    await spy;
    //se verifica el console.log del componente
    expect(mockConsoleLog).toHaveBeenCalledTimes(1);
  });
  // Añade más pruebas para cubrir diferentes casos y comportamientos del componente según sea necesario
});
