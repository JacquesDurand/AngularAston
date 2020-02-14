import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-box',
  templateUrl: './toggle-box.component.html',
  styleUrls: ['./toggle-box.component.scss']
})
export class ToggleBoxComponent implements OnInit {

  @Input() title: string = 'Untitled';
  @Input('toggle') state: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
