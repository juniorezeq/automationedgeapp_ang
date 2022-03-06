import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginService!: LoginService

  constructor() { }

  ngOnInit(): void {
  }

}
