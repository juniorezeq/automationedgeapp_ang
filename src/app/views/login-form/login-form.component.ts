import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResponseLogin } from 'src/app/shared/model/ResponseLogin.model';
import { Tenant } from 'src/app/shared/model/Tenant.moldel';
import { LoginService } from 'src/app/shared/service/login.service';
import { ProgressoComponent } from '../progresso/progresso.component';
import { DialogResultComponent } from './dialog-result/dialog-result.component';

@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public loginForm!: FormGroup;
  responseLogin!: ResponseLogin;
  tenant!: Tenant;
  hide = true;
  progresso = false;
  
  constructor(
    private fb: FormBuilder = new FormBuilder,
    public loginService: LoginService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      portal: ['', [Validators.required]]
    });
  }

getProgresso(): void{
  this.getLogin();
}
  getLogin(): void{
    const CaixaDialog = this.dialog.open(ProgressoComponent, {
      minWidth: '400px',
      data: {resp: this.progresso},
    }); 

    this.loginService.getLogin( this.loginForm.value.usuario,this.loginForm.value.senha,this.loginForm.value.portal).subscribe((data: any) => {
    this.responseLogin =  data;

    if (this.responseLogin.message=="OK")  {
      const dialogRef = this.dialog.open(DialogResultComponent, {
        minWidth: '400px',
        data: {resp: this.responseLogin},
      }); 

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // window.location.reload();
      });
    } 
    else {
      this.snackBar.open('Falha na autentica????o', 'Usu??rio ou senha incorretos.', {
        duration: 3000
      });
    }
    
    this.loginForm.reset();
    CaixaDialog.close();
  });
  }

getResposta():ResponseLogin{
return this.responseLogin;
}

}
