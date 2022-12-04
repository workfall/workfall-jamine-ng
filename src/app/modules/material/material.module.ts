import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from "@angular/material/button";

const IMPORTS_TO_BE_EXPORTED = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...IMPORTS_TO_BE_EXPORTED
  ],
  exports: [
    ...IMPORTS_TO_BE_EXPORTED
  ]
})
export class MaterialModule { }
