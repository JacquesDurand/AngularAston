import { Component, OnInit } from '@angular/core';
import { ApiChuckService } from '../api-chuck.service';

import { ChuckQuote } from './chuck-quote.model'
@Component({
  selector: 'app-chuck-quote',
  templateUrl: './chuck-quote.component.html',
  styleUrls: ['./chuck-quote.component.scss']
})
export class ChuckQuoteComponent implements OnInit {

  quotes: ChuckQuote = new ChuckQuote;


  constructor(private apiChuck: ApiChuckService) { }

  ngOnInit(): void {
    this.apiChuck.getJoke().subscribe((data: ChuckQuote) => {
      console.log(data);
      console.log(this.quotes);
      
      this.quotes = data;
      console.log(this.quotes);
      
    })
  }

}
