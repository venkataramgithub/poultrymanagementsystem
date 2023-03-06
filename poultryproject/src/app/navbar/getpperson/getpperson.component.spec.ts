import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetppersonComponent } from './getpperson.component';

describe('GetppersonComponent', () => {
  let component: GetppersonComponent;
  let fixture: ComponentFixture<GetppersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetppersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetppersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
