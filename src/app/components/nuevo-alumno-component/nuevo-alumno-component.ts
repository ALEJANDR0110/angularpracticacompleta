import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceAlumnos } from '../../services/service.alumnos';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-nuevo-alumno-component',
  standalone: false,
  styleUrl: './nuevo-alumno-component.css',
  templateUrl: './nuevo-alumno-component.html',
})
export class NuevoAlumnoComponent implements OnInit{
  public listaCursos!: number[];
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajaapellidos") cajaApellidos!: ElementRef;
  @ViewChild("cajaimagen") cajaImagen!: ElementRef;
  @ViewChild("selectactivo") selectActivo!: ElementRef;
  @ViewChild("selectcurso") selectCurso!: ElementRef;
  public mensaje!: string;

  constructor(
    private _service: ServiceAlumnos,
    private _cdr: ChangeDetectorRef
  ) {}

  async loadCursos(): Promise<void> {
    this.listaCursos = await this._service.getCursosAsync();
    this._cdr.detectChanges();
  }

  ngOnInit(): void {
    this.loadCursos();
  }

  async crearAlumno(): Promise<void> {
    let nombre = this.cajaNombre.nativeElement.value;
    let apellido = this.cajaApellidos.nativeElement.value;
    let imagen = this.cajaImagen.nativeElement.value;
    let activo = parseInt(this.selectActivo.nativeElement.value);
    let curso = parseInt(this.selectCurso.nativeElement.value);

    let alumno = new Alumno(1, nombre, apellido, imagen, activo, curso);

    let response = await this._service.postNuevoAlumno(alumno);
    this.mensaje = "Alumno añadido correctamente";
    this._cdr.detectChanges();
  }
}
