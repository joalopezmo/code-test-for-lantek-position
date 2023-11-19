import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { SharedUIModule } from '@nx-monorepo/shared/ui';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'nx-monorepo-login',
  standalone: true,
  imports: [
    CommonModule,
    SharedUIModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  animations: [],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorMessage: string | undefined;
  usernameControl: FormControl = new FormControl<string>('');
  passwordControl: FormControl = new FormControl<string>('');
  loginForm!: FormGroup;
  constructor(private loginService: LoginService, public form: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.form.group({
      username: this.usernameControl,
      password: this.passwordControl,
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log(this.loginForm.value.username, this.loginForm.value.password);
    this.loginService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe({
        next: (response) => {
          console.log('Login exitoso', response);
          // se guarda el username y el password en el local storage
          localStorage.setItem('username', this.loginForm.value.username);
          localStorage.setItem('password', this.loginForm.value.password);
          // se redirige a la ruta dashboard
          window.location.href = '/dashboard';
        },
        error: (error) => {
          console.error('Error al autenticar', error);
          // se muestra un alert con mensaje de error
          if (error.status === 401) {
            this.errorMessage =
              'Credenciales inválidas. Por favor, inténtalo de nuevo.';
          } else {
            this.errorMessage =
              'Ocurrió un error. Por favor, inténtalo más tarde.';
          }
          // alert(this.errorMessage);
        },
        complete: () => console.log('Login finalizado'),
      });
  }
}
