import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegionPagePage } from './region-page.page';

describe('RegionPagePage', () => {
  let component: RegionPagePage;
  let fixture: ComponentFixture<RegionPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
