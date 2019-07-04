import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareRevisionComponent } from './hardware-revision.component';

describe('HardwareRevisionComponent', () => {
  let component: HardwareRevisionComponent;
  let fixture: ComponentFixture<HardwareRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwareRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
