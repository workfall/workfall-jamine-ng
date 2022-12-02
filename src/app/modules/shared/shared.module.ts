import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { ProductComponent } from 'src/app/components/product/product.component';

const IMPORTS_TO_BE_EXPORTED = [
  NavBarComponent,
  ProductComponent
];

@NgModule({
  declarations: [
    ...IMPORTS_TO_BE_EXPORTED
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...IMPORTS_TO_BE_EXPORTED
  ]
})
export class SharedModule { }
