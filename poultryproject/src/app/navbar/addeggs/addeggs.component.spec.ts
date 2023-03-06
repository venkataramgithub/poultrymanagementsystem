import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeggsComponent } from './addeggs.component';

describe('AddeggsComponent', () => {
  let component: AddeggsComponent;
  let fixture: ComponentFixture<AddeggsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeggsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeggsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
