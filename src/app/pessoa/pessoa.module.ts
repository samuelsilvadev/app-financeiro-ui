import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarModule } from 'primeng/components/calendar/calendar';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TabViewModule, DataTableModule, SelectButtonModule, DropdownModule, InputMaskModule } from 'primeng/primeng';

import { PessoaGridComponent } from './pessoa-grid/pessoa-grid.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoaSearchComponent } from './pessoa-search/pessoa-search.component';

@NgModule({
  imports: [
    CommonModule,
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
    PessoaSearchComponent,
    PessoaFormComponent,
    PessoaGridComponent
  ],
  exports: [
    PessoaSearchComponent,
    PessoaFormComponent
  ]
})
export class PessoaModule { }
