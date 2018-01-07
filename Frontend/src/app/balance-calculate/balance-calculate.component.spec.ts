import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceCalculateComponent } from './balance-calculate.component';

describe('BalanceCalculateComponent', () => {
  let component: BalanceCalculateComponent;
  let fixture: ComponentFixture<BalanceCalculateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceCalculateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
