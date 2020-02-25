import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';
import { ColorBoxComponent } from './color-box/color-box.component';
import { ButtonDirective } from './directives/button.directive';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DemoComponent } from './demo/demo.component';
import { from } from 'rxjs';
import { ChuckQuoteComponent } from './chuck-quote/chuck-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    ColorBoxComponent,
    ButtonDirective,
    TwoWayDataBindingComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    DemoComponent,
    ChuckQuoteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
