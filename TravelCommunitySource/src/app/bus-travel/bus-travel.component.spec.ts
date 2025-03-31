import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusTravelComponent } from './bus-travel.component';

describe('BusTravelComponent', () => {
  let component: BusTravelComponent;
  let fixture: ComponentFixture<BusTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusTravelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
