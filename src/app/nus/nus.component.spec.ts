import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NusComponent } from './nus.component';

describe('NusComponent', () => {
  let component: NusComponent;
  let fixture: ComponentFixture<NusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
