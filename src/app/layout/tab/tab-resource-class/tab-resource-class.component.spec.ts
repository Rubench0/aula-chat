import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabResourceClassComponent } from './tab-resource-class.component';

describe('TabResourceClassComponent', () => {
  let component: TabResourceClassComponent;
  let fixture: ComponentFixture<TabResourceClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabResourceClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabResourceClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
