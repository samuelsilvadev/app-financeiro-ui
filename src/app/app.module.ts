import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TabViewModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { DataTableModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { SelectButtonModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { InputMaskModule } from 'primeng/primeng';

import { LancamentoSearchComponent } from './lancamento-search/lancamento-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuLateralComponent } from './navbar/menu-lateral/menu-lateral.component';
import { PessoaSearchComponent } from './pessoa-search/pessoa-search.component';
import { LancamentoFormComponent } from './lancamento-form/lancamento-form.component';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LancamentoSearchComponent,
    NavbarComponent,
    MenuLateralComponent,
    PessoaSearchComponent,
    LancamentoFormComponent,
    PessoaFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TabViewModule,
    ButtonModule,
    InputTextModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
