import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsdetailsComponent } from './addsdetails.component';

describe('AddsdetailsComponent', () => {
  let component: AddsdetailsComponent;
  let fixture: ComponentFixture<AddsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
