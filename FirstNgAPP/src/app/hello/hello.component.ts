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

  constructor() { }

  ngOnInit(): void {
  }

}
