import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceAlumnos } from '../../services/service.alumnos';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent implements OnInit{
  public listaCursos!: number[];
  
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

  logOutAlumno(): void {
    sessionStorage.removeItem("TOKEN")
  }
}
