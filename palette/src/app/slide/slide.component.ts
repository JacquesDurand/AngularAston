import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  color: number = 0;
  @Input() min: number = 0;
  @Input() max: number = 0;
  @Output() valueEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onSlide(): void {

    this.valueEvent.emit(this.color);
  }

}
