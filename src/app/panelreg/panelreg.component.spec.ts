import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelregComponent } from './panelreg.component';

describe('PanelregComponent', () => {
  let component: PanelregComponent;
  let fixture: ComponentFixture<PanelregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
