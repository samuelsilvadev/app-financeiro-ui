import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LancamentoSearchComponent } from './lancamento-search/lancamento-search.component';
import { LancamentoGridComponent } from './lancamento-grid/lancamento-grid.component';
import { LancamentoFormComponent } from './lancamento-form/lancamento-form.component';

import { InputMaskModule, DropdownModule, SelectButtonModule, DataTableModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ButtonModule } from 'primeng/components/button/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    CurrencyMaskModule,
    SharedModule
  ],
  declarations: [
    LancamentoFormComponent,
    LancamentoSearchComponent,
    LancamentoGridComponent
  ],
  exports: [
    LancamentoFormComponent,
    LancamentoSearchComponent
  ]
})
export class LancamentoModule { }
