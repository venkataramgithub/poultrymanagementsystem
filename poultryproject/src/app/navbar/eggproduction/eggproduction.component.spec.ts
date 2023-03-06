import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggproductionComponent } from './eggproduction.component';

describe('EggproductionComponent', () => {
  let component: EggproductionComponent;
  let fixture: ComponentFixture<EggproductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggproductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggproductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
