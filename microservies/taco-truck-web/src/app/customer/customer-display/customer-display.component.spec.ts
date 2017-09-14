import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDisplayComponent } from './customer-display.component';

describe('CustomerDisplayComponent', () => {
  let component: CustomerDisplayComponent;
  let fixture: ComponentFixture<CustomerDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
