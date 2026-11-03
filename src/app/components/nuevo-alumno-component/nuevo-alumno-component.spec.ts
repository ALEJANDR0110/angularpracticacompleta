import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoAlumnoComponent } from './nuevo-alumno-component';

describe('NuevoAlumnoComponent', () => {
  let component: NuevoAlumnoComponent;
  let fixture: ComponentFixture<NuevoAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevoAlumnoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoAlumnoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
