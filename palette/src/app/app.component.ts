import { Component, ViewChild, ElementRef , AfterViewInit, ViewChildren,QueryList} from '@angular/core';
import { ColorBoxComponent } from './color-box/color-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'palette';
  colorString : string ='';

  @ViewChild('focusInput') focusInputRef : ElementRef ;
  @ViewChildren(ColorBoxComponent) colorBoxRef : QueryList<ColorBoxComponent>;

  ngAfterViewInit() {
    console.log(this.focusInputRef);
    this.focusInputRef.nativeElement.focus();
    console.log(this.colorBoxRef);
  }

  retrieveColor(event:string): void {    
    this.colorString = event ;    
  }
}
