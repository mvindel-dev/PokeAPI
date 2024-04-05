import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SinnohPage } from './sinnoh.page';

describe('SinnohPage', () => {
  let component: SinnohPage;
  let fixture: ComponentFixture<SinnohPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SinnohPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
