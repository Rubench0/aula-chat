import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPartnerRequestComponent } from './modal-partner-request.component';

describe('ModalPartnerRequestComponent', () => {
  let component: ModalPartnerRequestComponent;
  let fixture: ComponentFixture<ModalPartnerRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPartnerRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPartnerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
