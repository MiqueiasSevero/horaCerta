import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespertarPage } from './despertar.page';

describe('DespertarPage', () => {
  let component: DespertarPage;
  let fixture: ComponentFixture<DespertarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespertarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespertarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
