import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavNavMobileComponent } from './sidenav-nav-mobile.component';

describe('SidenavNavMobileComponent', () => {
  let component: SidenavNavMobileComponent;
  let fixture: ComponentFixture<SidenavNavMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavNavMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavNavMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
