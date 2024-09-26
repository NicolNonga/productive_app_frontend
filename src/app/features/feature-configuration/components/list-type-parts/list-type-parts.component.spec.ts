import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypePartsComponent } from './list-type-parts.component';

describe('ListTypePartsComponent', () => {
  let component: ListTypePartsComponent;
  let fixture: ComponentFixture<ListTypePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTypePartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTypePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
