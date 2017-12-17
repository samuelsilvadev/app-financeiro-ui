import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PessoaSearchComponent } from './pessoa-search/pessoa-search.component';
import { LancamentoSearchComponent } from './lancamento-search/lancamento-search.component';

const APP_ROUTES: Routes = [
  { path : 'pessoa/search', component: PessoaSearchComponent },
  { path : 'lancamento/search', component: LancamentoSearchComponent },
  { path : '', component: HomeComponent  },
  { path : '**', component: HomeComponent  }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
