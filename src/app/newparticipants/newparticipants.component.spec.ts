import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewparticipantsComponent } from './newparticipants.component';

describe('NewparticipantsComponent', () => {
  let component: NewparticipantsComponent;
  let fixture: ComponentFixture<NewparticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewparticipantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewparticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
