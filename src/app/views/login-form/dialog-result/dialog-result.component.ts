import { inject } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ResponseLogin } from 'src/app/shared/model/ResponseLogin.model';
import { LoginService } from 'src/app/shared/service/login.service';
import { Component, ElementRef, Injectable, Input, OnInit, ViewChild } from '@angular/core';
import { LoginFormComponent } from '../login-form.component';

@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-dialog-result',
  templateUrl: './dialog-result.component.html',
  styleUrls: ['./dialog-result.component.css']
})
export class DialogResultComponent implements OnInit {
  response!: ResponseLogin;
  
  constructor(/*public _response: ResponseLogin*/) {
   }

  ngOnInit(): void {
  /*  this.response = this._response;
    alert(this.response.userFirstName);*/
  }
  
}