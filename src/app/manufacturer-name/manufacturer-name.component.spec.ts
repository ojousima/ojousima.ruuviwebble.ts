import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerNameComponent } from './manufacturer-name.component';

describe('ManufacturerNameComponent', () => {
  let component: ManufacturerNameComponent;
  let fixture: ComponentFixture<ManufacturerNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
