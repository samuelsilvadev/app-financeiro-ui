import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { MenuLateralComponent } from './navbar/menu-lateral/menu-lateral.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    MenuLateralComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
