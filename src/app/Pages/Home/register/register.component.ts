// register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  useOtpRegister: boolean = false;
  showPasswords: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.initializeForm();
  }

  togglePasswordsVisibility() {
    this.showPasswords = !this.showPasswords;
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      email: ['', [Validators.email]], // Optional Email
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }
  

  toggleRegisterMethod() {
    this.useOtpRegister = !this.useOtpRegister;
    this.initializeForm();
  
    if (this.useOtpRegister) {
      this.registerForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
        email: ['', [Validators.email]], // Optional Email
        otp: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]]
      });
    }
  }
  

  sendOtp() {
    if (this.registerForm.get('mobile')?.valid) {
      console.log('OTP sent to mobile:', this.registerForm.get('mobile')?.value);
      alert('OTP sent to your mobile');
    }
  }

  onRegister() {
    if (this.registerForm.valid) {
      const { name, mobile, email, password, otp } = this.registerForm.value;
      
      if (this.useOtpRegister) {
        console.log('Registering with OTP:', name, mobile, email || 'No Email', otp);
        this.router.navigate(['/login']);
      } else {
        this.authService.register(name, email || '', password).subscribe({
          next: (res) => {
            console.log('Registration Successful', res);
            this.router.navigate(['/login']);
          },
          error: (err) => {
            console.error('Registration Error:', err);
          }
        });
      }
    }
  }
  
}