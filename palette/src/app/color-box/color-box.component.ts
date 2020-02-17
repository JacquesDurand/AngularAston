import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.scss']
})
export class ColorBoxComponent implements OnInit {

  colors: number[] = [0, 0, 0];
  values: number[] = [0, 0, 0];
  colorString: string = `rgb(${this.values[0]},${this.values[1]},${this.values[2]})`;

 @Output() colorEmit = new EventEmitter<string>();

  printValue(event: number, i: number): void {
    this.values[i] = event;
    console.log(this.colorString);
    this.colorString = `rgb(${this.values[0]},${this.values[1]},${this.values[2]})`;
    this.colorEmit.emit(this.colorString);

  }
  ngOnInit(): void {

  }

}
