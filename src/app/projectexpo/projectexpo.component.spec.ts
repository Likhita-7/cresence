import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectexpoComponent } from './projectexpo.component';

describe('ProjectexpoComponent', () => {
  let component: ProjectexpoComponent;
  let fixture: ComponentFixture<ProjectexpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectexpoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectexpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
