import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOneProfileComponent } from './user-one-profile.component';

describe('UserOneProfileComponent', () => {
  let component: UserOneProfileComponent;
  let fixture: ComponentFixture<UserOneProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOneProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOneProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
