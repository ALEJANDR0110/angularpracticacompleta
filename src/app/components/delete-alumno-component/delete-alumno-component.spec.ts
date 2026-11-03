import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteAlumnoComponent } from './delete-alumno-component';

describe('DeleteAlumnoComponent', () => {
  let component: DeleteAlumnoComponent;
  let fixture: ComponentFixture<DeleteAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteAlumnoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteAlumnoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
