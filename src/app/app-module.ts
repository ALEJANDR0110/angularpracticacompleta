import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login-component/login-component';
import { ServiceAlumnos } from './services/service.alumnos';
import { authTokenInterceptor } from './interceptors/auth-token-interceptor';
import { AuthGuard } from './guards/auth-guard';
import { NuevoAlumnoComponent } from './components/nuevo-alumno-component/nuevo-alumno-component';
import { AlumnosCursosComponent } from './components/alumnos-cursos-component/alumnos-cursos-component';
import { DeleteAlumnoComponent } from './components/delete-alumno-component/delete-alumno-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    NuevoAlumnoComponent,
    AlumnosCursosComponent,
    DeleteAlumnoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    AuthGuard,
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideHttpClient(withInterceptors([authTokenInterceptor])),
    ServiceAlumnos,
  ],
  bootstrap: [App],
})
export class AppModule {}
