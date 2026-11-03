import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { ServiceAlumnos } from '../../services/service.alumnos';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit {
  public listaAlumnos!: Alumno[];
  public alumnoDelt: Alumno | null = null;

  constructor(
    private _service: ServiceAlumnos,
    private _cdr: ChangeDetectorRef,
  ) {}

  async loadAlumnos(): Promise<void> {
    this.listaAlumnos = await this._service.getAlumnosAsync();
    this._cdr.detectChanges();
  }

  ngOnInit(): void {
    this.loadAlumnos();
  }

  preguntaBorrarAlumno(alumno: Alumno): void {
    this.alumnoDelt = alumno;
  }

  async borrarAlumno(event: boolean): Promise<void> {
    if(event && this.alumnoDelt) {
      console.log("borrar funciona")

      let result = await this._service.deleteAlumnoAsync(this.alumnoDelt.idAlumno)
      this.alumnoDelt = null;
      await this.loadAlumnos();
    }else {
      console.log("cancelar funciona")
      this.alumnoDelt = null;
    }

    this._cdr.detectChanges();
  }
}
