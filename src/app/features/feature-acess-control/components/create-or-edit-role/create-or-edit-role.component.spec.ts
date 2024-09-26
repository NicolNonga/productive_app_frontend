import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditRoleComponent } from './create-or-edit-role.component';

describe('CreateOrEditRoleComponent', () => {
  let component: CreateOrEditRoleComponent;
  let fixture: ComponentFixture<CreateOrEditRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrEditRoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrEditRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
