import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEnrollComponent } from './manage-enroll.component';

describe('ManageEnrollComponent', () => {
  let component: ManageEnrollComponent;
  let fixture: ComponentFixture<ManageEnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageEnrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
