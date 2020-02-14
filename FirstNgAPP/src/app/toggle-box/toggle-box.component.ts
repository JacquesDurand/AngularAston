import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-box',
  templateUrl: './toggle-box.component.html',
  styleUrls: ['./toggle-box.component.scss']
})
export class ToggleBoxComponent implements OnInit, OnChanges {

  @Input() title: string = 'Untitled';
  @Input('toggle') state: boolean = false;
  constructor() {
    console.log(this.state);

  }

  ngOnChanges(): void {
    console.log('Change', typeof (this.state), this.state);
  }

  ngOnInit(): void {
    console.log('Init', typeof (this.state), this.state);

  }

}
