import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PessoaFormComponent } from './pessoa/pessoa-form/pessoa-form.component';
import { PessoaSearchComponent } from './pessoa/pessoa-search/pessoa-search.component';
import { LancamentoFormComponent } from './lancamento/lancamento-form/lancamento-form.component';
import { LancamentoSearchComponent } from './lancamento/lancamento-search/lancamento-search.component';

const APP_ROUTES: Routes = [
  { path : 'pessoa/form', component: PessoaFormComponent },
  { path : 'pessoa/search', component: PessoaSearchComponent },
  { path : 'lancamento/form', component: LancamentoFormComponent },
  { path : 'lancamento/search', component: LancamentoSearchComponent },
  { path : '', component: HomeComponent  },
  { path : '**', component: HomeComponent  }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
