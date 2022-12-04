import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { ProductComponent } from 'src/app/components/product/product.component';
import {HttpClientModule} from '@angular/common/http';

const IMPORTS_TO_BE_EXPORTED = [
  NavBarComponent,
  ProductComponent
];

@NgModule({
  declarations: [
    ...IMPORTS_TO_BE_EXPORTED
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ...IMPORTS_TO_BE_EXPORTED
  ]
})
export class SharedModule { }
