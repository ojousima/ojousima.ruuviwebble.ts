import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuuviEndpointsComponent } from './ruuvi-endpoints.component';

describe('RuuviEndpointsComponent', () => {
  let component: RuuviEndpointsComponent;
  let fixture: ComponentFixture<RuuviEndpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuuviEndpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuuviEndpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
