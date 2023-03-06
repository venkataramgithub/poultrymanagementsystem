import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsdetailsComponent } from './getsdetails.component';

describe('GetsdetailsComponent', () => {
  let component: GetsdetailsComponent;
  let fixture: ComponentFixture<GetsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
