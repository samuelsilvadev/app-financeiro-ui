import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { PessoaSearchComponent } from './pessoa-search/pessoa-search.component';
import { LancamentoSearchComponent } from './lancamento-search/lancamento-search.component';

const APP_ROUTES: Routes = [
  { path : '', component: AppComponent },
  { path : 'pessoa/search', component: PessoaSearchComponent },
  { path : 'lancamento/search', component: LancamentoSearchComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
