import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {
  barraProgresso= true;

  constructor(public dialogRef: MatDialogRef<ProgressoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {progresso: boolean} ) {
      this.barraProgresso = this.data.progresso;
  }

  ngOnInit(): void {
  }
 
  setProgresso(valor: boolean){
    this.barraProgresso = valor;    
 }

}
