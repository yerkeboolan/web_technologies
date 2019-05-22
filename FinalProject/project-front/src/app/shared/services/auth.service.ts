import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends MainService {

  constructor(http: HttpClient) { 
    super(http)
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  register(username: any, password: any): void{
    this.post('http://localhost:8000/app/register/', {
      username: username,
      password: password
    }).then(res => {
      localStorage.setItem('token', res.token);
    });
  }

  login(username: any, password: any): void{
    this.post('http://localhost:8000/app/login/', {
      username: username,
      password: password
    }).then(res => {
      
      localStorage.setItem('token', res.token);
      var i;

console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}


      console.log(res)
    });
  }

  logout(): void {
    localStorage.clear();
    this.post('http://localhost:8000/app/logout/', {}).then(() => {
localStorage.clear();
    // this.token = ''
    });
  }
}
