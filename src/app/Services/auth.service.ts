// src/app/Services/auth.service.ts (Updated)
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_CONFIG } from './api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = API_CONFIG.baseURL;
  private http = inject(HttpClient);

  login(identifier: string, password: string): Observable<any> {
    const payload = identifier.includes('@') 
      ? { email: identifier, password }
      : { mobile: identifier, password };
  
    return this.http.post(`${this.apiUrl}/login`, payload)
      .pipe(map((response: any) => response));
  }
  

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { name, email, password })
      .pipe(map((response: any) => response));
  }

  verifyOtp(mobile: string, otp: string): Observable<any> {
    return this.http.post('/api/verify-otp', { mobile, otp });
  }
}
