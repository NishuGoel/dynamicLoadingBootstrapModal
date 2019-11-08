import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderInfoModalComponent } from './render-info-modal.component';

describe('RenderInfoModalComponent', () => {
  let component: RenderInfoModalComponent;
  let fixture: ComponentFixture<RenderInfoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderInfoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
