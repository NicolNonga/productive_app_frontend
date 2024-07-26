import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditUsersComponent } from './create-or-edit-users.component';

describe('CreateOrEditUsersComponent', () => {
  let component: CreateOrEditUsersComponent;
  let fixture: ComponentFixture<CreateOrEditUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrEditUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrEditUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
