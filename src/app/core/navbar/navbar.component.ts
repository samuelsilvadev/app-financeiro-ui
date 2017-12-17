import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  hiddenMenu: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onClickMenu(event) {
    event.preventDefault();
    this.hiddenMenu = !this.hiddenMenu;
  }

  /**
   * Este Método é usado pelo componente filho
   * quando é clicado no submenu de fechar
   * @param evento
   */
  onClickMudaVisibilidadeMenu(evento) {
    this.hiddenMenu = evento.hidden;
  }

}
