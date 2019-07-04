import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelNumberComponent } from './model-number.component';

describe('ModelNumberComponent', () => {
  let component: ModelNumberComponent;
  let fixture: ComponentFixture<ModelNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
