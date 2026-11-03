import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceAlumnos } from '../../services/service.alumnos';
import { Login } from '../../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  @ViewChild("cajauser") cajaUser!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;
  public mensaje!: string;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceAlumnos,
    private _router: Router
  ){}

  async logInAlumno(): Promise<void>{
    let userName = this.cajaUser.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;

    let login = new Login(userName, password);
    let response = await this._service.logInAlumno(login);
    this.mensaje = "Ya estas dentro, a jugar";
    
    sessionStorage.setItem("TOKEN", response.response)
    this._cdr.detectChanges();
    await this._router.navigate(['/']);
  }
}
