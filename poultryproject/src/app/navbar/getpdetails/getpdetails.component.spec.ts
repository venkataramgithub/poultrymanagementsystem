import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpdetailsComponent } from './getpdetails.component';

describe('GetpdetailsComponent', () => {
  let component: GetpdetailsComponent;
  let fixture: ComponentFixture<GetpdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetpdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetpdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
