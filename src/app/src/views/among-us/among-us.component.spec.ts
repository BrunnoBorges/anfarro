import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmongUsComponent } from './among-us.component';

describe('AmongUsComponent', () => {
  let component: AmongUsComponent;
  let fixture: ComponentFixture<AmongUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmongUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmongUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
