import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = 'authToken';
  private readonly usernameKey = 'username'; 
  private readonly emailKey = 'email'; 
  private isAuthenticated = false;
  constructor() {}
  private isLocalStorageAvailable(): boolean {
    return typeof window!== 'undefined' &&!!window.localStorage;
  }
  register(username: string, password: string, email: string): boolean {
    if (this.isLocalStorageAvailable()) {
      const token = btoa(`${email}:${password}`);
      localStorage.setItem(this.tokenKey, token);
      localStorage.setItem(this.usernameKey, username); 
      localStorage.setItem(this.emailKey, email); 
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }
  login(email: string, password: string): boolean {
    if (this.isLocalStorageAvailable()) {
      const token = localStorage.getItem(this.tokenKey);
      if (token) {
        const [storedEmail, storedPassword] = atob(token).split(':');
        if (email === storedEmail && password === storedPassword) {
          this.isAuthenticated = true;
          return true;
        }
      }
    }
    return false;
  }
  logout(): void {
    this.isAuthenticated = false;
  }
  getAuthStatus(): boolean {
    return this.isAuthenticated;
  }
  getUsername(): string | null {
    return this.isLocalStorageAvailable()? localStorage.getItem(this.usernameKey) : null;
  }
  getEmail(): string | null {
    return this.isLocalStorageAvailable()? localStorage.getItem(this.emailKey) : null;
  }
}


