import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditTypePartComponent } from './create-or-edit-type-part.component';

describe('CreateOrEditTypePartComponent', () => {
  let component: CreateOrEditTypePartComponent;
  let fixture: ComponentFixture<CreateOrEditTypePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrEditTypePartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrEditTypePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
