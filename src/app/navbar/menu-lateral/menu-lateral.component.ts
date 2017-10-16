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

  onClickFecharMenu() {
    this.display = !this.display;
    this.eventEmitterFecharMenu.emit({hidden: this.display});
  }

}
