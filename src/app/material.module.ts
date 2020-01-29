import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatTableModule,
  MatIconModule,
  MatPaginatorModule
} from '@angular/material';

@NgModule({
  imports: [
     CommonModule,
     MatButtonModule,
     MatTableModule,
     MatIconModule,
     MatPaginatorModule
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule
  ]
})
export class AngularMaterialModule { }
