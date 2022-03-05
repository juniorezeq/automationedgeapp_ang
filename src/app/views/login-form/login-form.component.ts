import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ResponseLogin } from 'src/app/shared/model/ResponseLogin.model';
import { Tenant } from 'src/app/shared/model/Tenant.moldel';
import { LoginService } from 'src/app/shared/service/login.service';
import { DialogResultComponent } from './dialog-result/dialog-result.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public loginForm!: FormGroup;
  responseLogin!: ResponseLogin;
  tenant!: Tenant;
  
  constructor(
    private fb: FormBuilder = new FormBuilder,
    public loginService: LoginService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      portal: ['', [Validators.required]]
    });
  }

  getLogin(): void{
    this.loginService.getLogin( this.loginForm.value.usuario,this.loginForm.value.senha,this.loginForm.value.portal).subscribe((data: any) => {
    this.responseLogin =  data;
    this.loginForm.reset();

    /*const dialogRef = this.dialog.open(DialogResultComponent, {
      // maxHeight: '95vh',
      minWidth: '400px',
      // width: '25vw',
    }); */

    /*dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // window.location.reload();
    });*/
  });
  }

}
