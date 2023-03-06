import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WastagesComponent } from './wastages.component';

describe('WastagesComponent', () => {
  let component: WastagesComponent;
  let fixture: ComponentFixture<WastagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WastagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WastagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
