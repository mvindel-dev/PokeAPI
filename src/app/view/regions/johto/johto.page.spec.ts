import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JohtoPage } from './johto.page';

describe('JohtoPage', () => {
  let component: JohtoPage;
  let fixture: ComponentFixture<JohtoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JohtoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
