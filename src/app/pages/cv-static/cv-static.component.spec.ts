import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvStaticComponent } from './cv-static.component';

describe('CvStaticComponent', () => {
  let component: CvStaticComponent;
  let fixture: ComponentFixture<CvStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvStaticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
