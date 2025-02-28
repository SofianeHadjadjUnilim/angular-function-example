import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeUsersComponent } from './fake-users.component';

describe('FakeUsersComponent', () => {
  let component: FakeUsersComponent;
  let fixture: ComponentFixture<FakeUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
