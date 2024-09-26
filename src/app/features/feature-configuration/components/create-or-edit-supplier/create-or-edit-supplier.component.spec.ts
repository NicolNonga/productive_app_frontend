import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditSupplierComponent } from './create-or-edit-supplier.component';

describe('CreateOrEditSupplierComponent', () => {
  let component: CreateOrEditSupplierComponent;
  let fixture: ComponentFixture<CreateOrEditSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrEditSupplierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrEditSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
