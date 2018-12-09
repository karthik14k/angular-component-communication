import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentUsingLocalVarComponent } from './parent-using-local-var.component';

describe('ParentUsingLocalVarComponent', () => {
  let component: ParentUsingLocalVarComponent;
  let fixture: ComponentFixture<ParentUsingLocalVarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentUsingLocalVarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentUsingLocalVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
