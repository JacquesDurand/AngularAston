import { Component, OnInit } from '@angular/core';
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
  data = { ville: 'Lille' };
  max_length: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  getName(): string {
    return this.name;
  }

  onSave(event: Event): void {
    console.log(event);
    
    alert(this.name)
  }

}
