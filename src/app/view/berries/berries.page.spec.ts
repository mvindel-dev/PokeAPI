import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BerriesPage } from './berries.page';

describe('BerriesPage', () => {
  let component: BerriesPage;
  let fixture: ComponentFixture<BerriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BerriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
