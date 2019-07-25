import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSensorOffsetWriteComponent } from './type-sensor-offset-write.component';

describe('TypeSensorOffsetWriteComponent', () => {
  let component: TypeSensorOffsetWriteComponent;
  let fixture: ComponentFixture<TypeSensorOffsetWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeSensorOffsetWriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSensorOffsetWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
