import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavChatClassComponent } from './side-nav-chat-class.component';

describe('SideNavChatClassComponent', () => {
  let component: SideNavChatClassComponent;
  let fixture: ComponentFixture<SideNavChatClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavChatClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavChatClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
