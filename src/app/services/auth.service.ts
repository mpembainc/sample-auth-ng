import { Injectable } from '@angular/core';

export interface User {
  name: string;
  role: string;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [];

  register(user: User) {
    this.users.push(user);
  }

  login(username: string, password: string) {
    return this.users.find(
      (u) => u.username == username && u.password == password
    );
  }
}
