import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixCodeComponent } from './matrix-code.component';

describe('MatrixCodeComponent', () => {
  let component: MatrixCodeComponent;
  let fixture: ComponentFixture<MatrixCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrixCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrixCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
