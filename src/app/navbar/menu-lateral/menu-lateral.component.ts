import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  @Input()
  display: Boolean = true;

  @Output()
  eventEmitterFecharMenu = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Este método atualiza a variável local para fechar o menu
   * e manda para o componente pai o valor da mesma
   * Isso evita que ocasione um pequeno bus no componente pai na hora
   * de clicar no icone para abrir o menu
   */
  onClickFecharMenu(event) {
    event.preventDefault();
    this.display = !this.display;
    this.eventEmitterFecharMenu.emit({hidden: this.display});
  }

}
