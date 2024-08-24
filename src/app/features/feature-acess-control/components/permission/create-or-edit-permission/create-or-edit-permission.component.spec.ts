import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditPermissionComponent } from './create-or-edit-permission.component';

describe('CreateOrEditPermissionComponent', () => {
  let component: CreateOrEditPermissionComponent;
  let fixture: ComponentFixture<CreateOrEditPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrEditPermissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrEditPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
