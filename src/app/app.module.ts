import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LancamentoModule } from './lancamento/lancamento.module';
import { PessoaModule } from './pessoa/pessoa.module';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { MenuLateralComponent } from './navbar/menu-lateral/menu-lateral.component';

import { ROUTING } from './app.routing';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LancamentoModule,
    PessoaModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuLateralComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
