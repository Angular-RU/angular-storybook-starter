import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() title = 'app';
  @Output() action = new EventEmitter();

  onClick($event) {
    this.action.emit($event);
  }
}
