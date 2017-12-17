import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { MenuLateralComponent } from './navbar/menu-lateral/menu-lateral.component';

import { ROUTING } from '../app.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ROUTING
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
