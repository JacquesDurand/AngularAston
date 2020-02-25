import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckQuoteComponent } from './chuck-quote.component';

describe('ChuckQuoteComponent', () => {
  let component: ChuckQuoteComponent;
  let fixture: ComponentFixture<ChuckQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuckQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
