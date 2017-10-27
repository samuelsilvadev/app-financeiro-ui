import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-form',
  templateUrl: './lancamento-form.component.html',
  styleUrls: ['./lancamento-form.component.css']
})
export class LancamentoFormComponent implements OnInit {

  tiposTransacao = [
    { label: 'Receita', value: 'RECEITA'},
    { label: 'Despesa', value: 'DESPESA'}
  ];

  categorias = [
    { label: 'Alimentação', value: 1 },
    { label: 'Saúde', value: 2 }
  ];

  pessoas = [
    { label: 'Samuel SIlva', value: 1 },
    { label: 'Katty Oliveira', value: 2 }
  ]

  constructor() { }

  ngOnInit() {
  }

}
