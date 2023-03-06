import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetwastagesComponent } from './getwastages.component';

describe('GetwastagesComponent', () => {
  let component: GetwastagesComponent;
  let fixture: ComponentFixture<GetwastagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetwastagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetwastagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
