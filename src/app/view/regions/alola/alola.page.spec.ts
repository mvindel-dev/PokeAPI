import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlolaPage } from './alola.page';

describe('AlolaPage', () => {
  let component: AlolaPage;
  let fixture: ComponentFixture<AlolaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
