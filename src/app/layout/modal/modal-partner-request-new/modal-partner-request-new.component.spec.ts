import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPartnerRequestNewComponent } from './modal-partner-request-new.component';

describe('ModalPartnerRequestNewComponent', () => {
  let component: ModalPartnerRequestNewComponent;
  let fixture: ComponentFixture<ModalPartnerRequestNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPartnerRequestNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPartnerRequestNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
