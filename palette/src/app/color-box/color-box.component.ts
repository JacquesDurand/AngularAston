import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.scss']
})
export class ColorBoxComponent implements OnInit {

  colors: number[] = [0, 0, 0];
  values: number[] = [0, 0, 0];
  labels: string[] = ['red', 'green', 'blue'];
  colorString: string = `rgb(${this.values[0]},${this.values[1]},${this.values[2]})`;

  @Output() colorEmit = new EventEmitter<string>();

  printValue(event: number, i: number): void {
    this.values[i] = event;
    this.colorString = `rgb(${this.values[0]},${this.values[1]},${this.values[2]})`;
    this.colorEmit.emit(this.colorString);

  }


  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    console.log(selBox.value, 'copied to clipboard');

    document.body.removeChild(selBox);
  }

  ngOnInit(): void {

  }

}
