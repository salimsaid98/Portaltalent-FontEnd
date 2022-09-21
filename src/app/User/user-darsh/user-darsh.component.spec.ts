import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDarshComponent } from './user-darsh.component';

describe('UserDarshComponent', () => {
  let component: UserDarshComponent;
  let fixture: ComponentFixture<UserDarshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDarshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDarshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
