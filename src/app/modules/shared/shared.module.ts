import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { ProductComponent } from 'src/app/components/product/product.component';



@NgModule({
  declarations: [
    NavBarComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
