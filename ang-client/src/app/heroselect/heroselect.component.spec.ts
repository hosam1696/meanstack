import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroselectComponent } from './heroselect.component';

describe('HeroselectComponent', () => {
  let component: HeroselectComponent;
  let fixture: ComponentFixture<HeroselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
