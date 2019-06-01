import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
    ) { }
    

  ngOnInit() {
  }
  
  logout(){
    this.auth.logout()
    this.router.navigate(["/"]);
  }
}
