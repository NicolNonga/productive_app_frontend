import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditPartComponent } from './create-or-edit-part.component';

describe('CreateOrEditPartComponent', () => {
  let component: CreateOrEditPartComponent;
  let fixture: ComponentFixture<CreateOrEditPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrEditPartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrEditPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
