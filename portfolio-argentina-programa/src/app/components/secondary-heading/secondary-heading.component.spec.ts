import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryHeadingComponent } from './secondary-heading.component';

describe('SecondaryHeadingComponent', () => {
  let component: SecondaryHeadingComponent;
  let fixture: ComponentFixture<SecondaryHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
