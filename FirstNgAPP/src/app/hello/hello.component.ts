import { Component, OnInit, Output, EventEmitter } from '@angular/core';
/**
 * selector : '.app-hello' pour selectionner sur une classe
 * selector : '[app-hello]' pour selectionner sur un attribut
 */
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  name = '';
  max_length: number = 10;
  @Output() valueEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSave(event: Event): void {
    const evt = event as KeyboardEvent;
    if (evt.keyCode === 13) {
      const input = event.target as HTMLInputElement;
      if (input.value) {
        this.valueEvent.emit(input.value);
        input.value = '';
      }
    }
  }



}
