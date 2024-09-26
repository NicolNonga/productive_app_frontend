import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPermissonToRoleComponent } from './add-permisson-to-role.component';

describe('AddPermissonToRoleComponent', () => {
  let component: AddPermissonToRoleComponent;
  let fixture: ComponentFixture<AddPermissonToRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPermissonToRoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPermissonToRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
