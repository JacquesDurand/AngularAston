import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.scss']
})
export class TwoWayDataBindingComponent implements OnInit {

  country: string ='France';
  constructor() { }

  onKeyUp(event: any) : void {
    this.country = event.target.value;
  }

  ngOnInit(): void {
  }

}
