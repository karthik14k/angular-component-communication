import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildUsingLocalVarComponent } from './child-using-local-var.component';

describe('ChildUsingLocalVarComponent', () => {
  let component: ChildUsingLocalVarComponent;
  let fixture: ComponentFixture<ChildUsingLocalVarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildUsingLocalVarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildUsingLocalVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
