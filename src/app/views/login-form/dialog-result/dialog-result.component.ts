import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ResponseLogin } from 'src/app/shared/model/ResponseLogin.model';

@Component({
  selector: 'app-dialog-result',
  templateUrl: './dialog-result.component.html',
  styleUrls: ['./dialog-result.component.css']
})
export class DialogResultComponent implements OnInit {
  responseLogin!: ResponseLogin;

  constructor(
    public dialogRef: MatDialogRef<DialogResultComponent>,
  ) { }

  ngOnInit(): void {
  }
  
  getDialog(dados: ResponseLogin):void{
    this.responseLogin = dados;

  }

}