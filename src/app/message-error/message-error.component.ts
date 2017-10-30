import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-error',
  template: `
  <div *ngIf="hasError()" class="ui-message ui-messages-error">
    {{ text }}
  </div>`,
  styles: [
    `.ui-messages-error {
      margin: 0;
      margin-top: 4px;
    }`
  ]
})
export class MessageErrorComponent implements OnInit {

  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

  hasError() {
    return this.control.hasError(this.error) && this.control.dirty;
  }

}
