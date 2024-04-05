import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KalosPage } from './kalos.page';

describe('KalosPage', () => {
  let component: KalosPage;
  let fixture: ComponentFixture<KalosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KalosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
