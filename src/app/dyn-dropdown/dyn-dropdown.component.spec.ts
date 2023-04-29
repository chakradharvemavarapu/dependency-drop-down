import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynDropdownComponent } from './dyn-dropdown.component';

describe('DynDropdownComponent', () => {
  let component: DynDropdownComponent;
  let fixture: ComponentFixture<DynDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
