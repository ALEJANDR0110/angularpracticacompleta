import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { ServiceAlumnos } from '../../services/service.alumnos';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-alumnos-cursos-component',
  standalone: false,
  styleUrl: './alumnos-cursos-component.css',
  templateUrl: './alumnos-cursos-component.html',
})
export class AlumnosCursosComponent implements OnInit{
  public idCurso!: number;
  public listaAlumnos!: Alumno[];

  constructor(
    private _service: ServiceAlumnos,
    private _cdr: ChangeDetectorRef,
    private _activeRoute: ActivatedRoute
  ) {}

  async loadAlumnos(): Promise<void> {
    this.listaAlumnos = await this._service.getAlumnosByCursoAsync(this.idCurso);
    this._cdr.detectChanges();
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.idCurso = parseInt(params['idcurso']);

      this.loadAlumnos();
    })
  }
}
