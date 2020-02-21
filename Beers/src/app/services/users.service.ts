import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { UserModel } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  registerUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>('http://localhost:3000/users/signin', user);
  }

 
}
