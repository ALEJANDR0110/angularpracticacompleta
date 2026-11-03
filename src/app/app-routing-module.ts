import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { AuthGuard } from './guards/auth-guard';
import { NuevoAlumnoComponent } from './components/nuevo-alumno-component/nuevo-alumno-component';
import { AlumnosCursosComponent } from './components/alumnos-cursos-component/alumnos-cursos-component';
import { DeleteAlumnoComponent } from './components/delete-alumno-component/delete-alumno-component';

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "nuevo", component: NuevoAlumnoComponent, canActivate: [AuthGuard] },
  { path: "curso/:idcurso", component: AlumnosCursosComponent, canActivate: [AuthGuard] },
  { path: "delete/:idalumno", component: DeleteAlumnoComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
