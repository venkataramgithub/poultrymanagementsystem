import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetspersonComponent } from './getsperson.component';

describe('GetspersonComponent', () => {
  let component: GetspersonComponent;
  let fixture: ComponentFixture<GetspersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetspersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetspersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
