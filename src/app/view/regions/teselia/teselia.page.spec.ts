import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeseliaPage } from './teselia.page';

describe('TeseliaPage', () => {
  let component: TeseliaPage;
  let fixture: ComponentFixture<TeseliaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TeseliaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
