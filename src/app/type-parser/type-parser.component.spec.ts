import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeParserComponent } from './type-parser.component';

describe('TypeParserComponent', () => {
  let component: TypeParserComponent;
  let fixture: ComponentFixture<TypeParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
