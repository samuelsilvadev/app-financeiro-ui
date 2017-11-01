import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LancamentoModule } from './lancamento/lancamento.module';

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

import { NavbarComponent } from './navbar/navbar.component';
import { MenuLateralComponent } from './navbar/menu-lateral/menu-lateral.component';
import { PessoaSearchComponent } from './pessoa-search/pessoa-search.component';

import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { MessageErrorComponent } from './message-error/message-error.component';

import { PessoaGridComponent } from './pessoa-grid/pessoa-grid.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LancamentoModule,
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
    InputMaskModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuLateralComponent,
    PessoaSearchComponent,
    PessoaFormComponent,
    MessageErrorComponent,
    PessoaGridComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
