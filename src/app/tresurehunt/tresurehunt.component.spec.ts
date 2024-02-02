import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresurehuntComponent } from './tresurehunt.component';

describe('TresurehuntComponent', () => {
  let component: TresurehuntComponent;
  let fixture: ComponentFixture<TresurehuntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TresurehuntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TresurehuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
