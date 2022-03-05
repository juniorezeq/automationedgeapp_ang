import { Component, OnInit } from '@angular/core';
import { ResponseLogin } from 'src/app/shared/model/ResponseLogin.model';
import { Tenant } from 'src/app/shared/model/Tenant.moldel';
import { LoginService } from 'src/app/shared/service/login.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  responseLogin!: ResponseLogin;
  tenant!: Tenant;

  constructor(
    public loginService: LoginService
  ) { }

  ngOnInit(): void {

  }


}
