import { inject } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResponseLogin } from 'src/app/shared/model/ResponseLogin.model';
import { LoginService } from 'src/app/shared/service/login.service';
import { Component, ElementRef, Inject, Injectable, Input, OnInit, ViewChild } from '@angular/core';
import { LoginFormComponent } from '../login-form.component';

@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-dialog-result',
  templateUrl: './dialog-result.component.html',
  styleUrls: ['./dialog-result.component.css']
})
export class DialogResultComponent implements OnInit {
  loginService!: LoginService
  resposta!: ResponseLogin

  
  constructor(public dialogRef: MatDialogRef<DialogResultComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {resp: ResponseLogin} ) {
      this.resposta = this.data.resp;
  }


  ngOnInit(): void {  

}

}