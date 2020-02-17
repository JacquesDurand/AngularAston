import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: number = 0;

  tasks: number[] = [];

  addToList(event: number): void {
    this.tasks.push(event);
  }

}
