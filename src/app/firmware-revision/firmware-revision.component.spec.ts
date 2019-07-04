import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmwareRevisionComponent } from './firmware-revision.component';

describe('FirmwareRevisionComponent', () => {
  let component: FirmwareRevisionComponent;
  let fixture: ComponentFixture<FirmwareRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmwareRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmwareRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
