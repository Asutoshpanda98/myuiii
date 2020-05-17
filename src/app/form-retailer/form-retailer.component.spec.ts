import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRetailerComponent } from './form-retailer.component';

describe('FormRetailerComponent', () => {
  let component: FormRetailerComponent;
  let fixture: ComponentFixture<FormRetailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRetailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
