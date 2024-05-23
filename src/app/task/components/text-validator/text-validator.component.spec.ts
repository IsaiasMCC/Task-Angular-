import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextValidatorComponent } from './text-validator.component';

describe('TextValidatorComponent', () => {
  let component: TextValidatorComponent;
  let fixture: ComponentFixture<TextValidatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextValidatorComponent]
    });
    fixture = TestBed.createComponent(TextValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
