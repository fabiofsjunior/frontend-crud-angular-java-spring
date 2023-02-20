import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'crud-angular';
  hidden: boolean = false;

  exibeLink() {
    this.hidden = !this.hidden;
  }
}
