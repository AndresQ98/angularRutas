import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DificultadesComponent } from './dificultades.component';

describe('DificultadesComponent', () => {
  let component: DificultadesComponent;
  let fixture: ComponentFixture<DificultadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DificultadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DificultadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
