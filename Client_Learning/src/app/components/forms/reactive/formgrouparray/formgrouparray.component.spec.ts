import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgrouparrayComponent } from './formgrouparray.component';

describe('FormgrouparrayComponent', () => {
  let component: FormgrouparrayComponent;
  let fixture: ComponentFixture<FormgrouparrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormgrouparrayComponent]
    });
    fixture = TestBed.createComponent(FormgrouparrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
