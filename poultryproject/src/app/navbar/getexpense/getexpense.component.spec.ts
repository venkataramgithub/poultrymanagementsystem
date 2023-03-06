import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetexpenseComponent } from './getexpense.component';

describe('GetexpenseComponent', () => {
  let component: GetexpenseComponent;
  let fixture: ComponentFixture<GetexpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
