import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpdetailsComponent } from './addpdetails.component';

describe('AddpdetailsComponent', () => {
  let component: AddpdetailsComponent;
  let fixture: ComponentFixture<AddpdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
