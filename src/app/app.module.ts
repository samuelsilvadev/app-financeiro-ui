import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TabViewModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { DataTableModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { LancamentoSearchComponent } from './lancamento-search/lancamento-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuLateralComponent } from './navbar/menu-lateral/menu-lateral.component';
import { PessoaSearchComponent } from './pessoa-search/pessoa-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LancamentoSearchComponent,
    NavbarComponent,
    MenuLateralComponent,
    PessoaSearchComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    ButtonModule,
    InputTextModule,
    DataTableModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
