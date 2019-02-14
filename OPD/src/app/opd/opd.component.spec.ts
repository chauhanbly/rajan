import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDComponent } from './opd.component';

describe('OPDComponent', () => {
  let component: OPDComponent;
  let fixture: ComponentFixture<OPDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OPDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OPDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
