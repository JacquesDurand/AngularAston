import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { ChuckQuote } from './chuck-quote/chuck-quote.model'
import { interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiChuckService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    const inter = interval(1000);

    const myStream = Observable.create((observer: any) => {
      observer.next('Hello');
    });

    myStream.subscribe(msg => console.log(msg));

    inter.subscribe(value => {
      console.log(value);
    });
  }

  public getJoke() {
    return this.http.get<ChuckQuote>(`https://api.chucknorris.io/jokes/random`);
  }
}
