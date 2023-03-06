import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddspersonComponent } from './addsperson.component';

describe('AddspersonComponent', () => {
  let component: AddspersonComponent;
  let fixture: ComponentFixture<AddspersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddspersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddspersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
