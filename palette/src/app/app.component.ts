import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'palette';
  colorString : string ='';

  retrieveColor(event:string): void {    
    this.colorString = event ;
    console.log(this.colorString);
    
  }
}
