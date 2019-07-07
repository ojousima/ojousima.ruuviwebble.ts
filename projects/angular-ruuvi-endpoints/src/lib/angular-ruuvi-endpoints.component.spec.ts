import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRuuviEndpointsComponent } from './angular-ruuvi-endpoints.component';

describe('AngularRuuviEndpointsComponent', () => {
  let component: AngularRuuviEndpointsComponent;
  let fixture: ComponentFixture<AngularRuuviEndpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularRuuviEndpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRuuviEndpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
