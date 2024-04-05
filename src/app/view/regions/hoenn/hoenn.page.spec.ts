import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoennPage } from './hoenn.page';

describe('HoennPage', () => {
  let component: HoennPage;
  let fixture: ComponentFixture<HoennPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HoennPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
