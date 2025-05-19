import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  useOtpLogin: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      identifier: ['', [Validators.required, this.emailOrPhoneValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  emailOrPhoneValidator(control: any) {
    const value = control.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[6-9]\d{9}$/;
  
    if (!value || (!emailPattern.test(value) && !phonePattern.test(value))) {
      return { invalidIdentifier: true };
    }
    return null;
  }  

  toggleLoginMethod() {
    this.useOtpLogin = !this.useOtpLogin;
    if (this.useOtpLogin) {
      this.loginForm = this.fb.group({
        mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
        otp: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]]
      });
    } else {
      this.initializeForm();
    }
  }

  sendOtp() {
    if (this.loginForm.get('mobile')?.valid) {
      // Simulate sending OTP (You can replace this with your API)
      console.log('OTP sent to mobile:', this.loginForm.get('mobile')?.value);
      alert('OTP sent to your mobile');
    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { identifier, password } = this.loginForm.value;
      this.authService.login(identifier, password).subscribe({
        next: (res) => {
          console.log('Login Successful', res);
          this.router.navigate(['/home-classic']);
        },
        error: (err) => {
          console.error('Login Error:', err);
        }
      });
    }
  }
  
  
}
