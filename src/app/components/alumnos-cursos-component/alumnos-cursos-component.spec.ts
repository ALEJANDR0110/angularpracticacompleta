import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnosCursosComponent } from './alumnos-cursos-component';

describe('AlumnosCursosComponent', () => {
  let component: AlumnosCursosComponent;
  let fixture: ComponentFixture<AlumnosCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnosCursosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlumnosCursosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
