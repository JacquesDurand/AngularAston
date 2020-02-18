import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  colorString: string = '';

  constructor() { }
  retrieveColor(event: string): void {
    this.colorString = event;
  }
  ngOnInit(): void {
  }

}
