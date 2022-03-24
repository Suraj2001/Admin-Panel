import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/users.models';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl + 'users');
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl + 'users', user);
  }

  public delete(id?: number) {
    return this.http.delete(this.usersUrl + 'deleteUser/' + id);
  }

  public getUser(id?: number): Observable<User> {
    return this.http.get<User>(this.usersUrl + 'getUser/' + id);
  }

  public updateUser(user: User, id?: number) {
    return this.http.put<User>(this.usersUrl + 'updateUser/' + id, user);
  }
}
