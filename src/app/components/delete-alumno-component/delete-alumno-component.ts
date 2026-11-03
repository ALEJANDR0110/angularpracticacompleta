import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-delete-alumno-component',
  standalone: false,
  styleUrl: './delete-alumno-component.css',
  templateUrl: './delete-alumno-component.html',
})
export class DeleteAlumnoComponent {
  @Input() alumno!: Alumno;
  @Output() borrarAlumno: EventEmitter<any> = new EventEmitter();

  eliminar(): void {
    this.borrarAlumno.emit(true);
  }

  cancelar(): void {
    this.borrarAlumno.emit(false);
  }
}
