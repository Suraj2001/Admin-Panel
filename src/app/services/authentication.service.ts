import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/users.models';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  baseUrl = 'http://localhost:8080/api/users/';
  userAuth?: Boolean;
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  user?: User;

  constructor(private http: HttpClient, private router: Router) {}

  generateToken(userDetails: any) {
    return this.http.post<boolean>(this.baseUrl + 'login', userDetails);
  }

  loginUser(token: any) {
    localStorage.setItem('token', token);
  }

  isloggedIn() {
    let token = localStorage.getItem('token');
    if (token == undefined || token == '' || token == null) {
      return false;
    }
    return true;
  }

  logout() {
    localStorage.removeItem('token');
    return true;
  }

  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }

  hasTokenExpired() {
    const token = localStorage.getItem('token');
    if (token != null) {
      const expiry = JSON.parse(atob(token.split('.')[1])).exp;
      if (Math.floor(new Date().getTime() / 1000) >= expiry) {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
    }
  }

  getUserDetails() {
    const userDetails = localStorage.getItem('user');
    if (userDetails) {
      this.user = JSON.parse(userDetails) as User;
    }
    return this.user;
  }

  setUserDetails(value: User) {
    localStorage.setItem('user', JSON.stringify(value));
  }
}
