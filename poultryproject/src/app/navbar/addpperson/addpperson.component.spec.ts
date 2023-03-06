import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddppersonComponent } from './addpperson.component';

describe('AddppersonComponent', () => {
  let component: AddppersonComponent;
  let fixture: ComponentFixture<AddppersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddppersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddppersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
