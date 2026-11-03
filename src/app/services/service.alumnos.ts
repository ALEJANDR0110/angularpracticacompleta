import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpContext, HttpHeaders } from "@angular/common/http";
import { Login } from "../models/login";
import { firstValueFrom } from "rxjs";
import { Alumno } from "../models/alumno";
import { SKIP_TOKEN } from "../utils/token.context";

@Injectable()
export class ServiceAlumnos {
    url = environment.apiAlumnos;

    constructor(
        private _http: HttpClient
    ) {}

    async logInAlumno(user: Login): Promise<any> {
        let request = "api/Auth/Login";
        let json = JSON.stringify(user);
        let header = new HttpHeaders()
            .set("content-type", "application/json");
        return firstValueFrom(
            this._http.post(this.url + request, json, {headers: header, context: new HttpContext().set(SKIP_TOKEN, true)})
        )
    }

    async getAlumnosAsync(): Promise<Alumno[]> {
        let request = "api/Alumnos/AlumnosToken";

        return firstValueFrom(
            this._http.get<Alumno[]>(this.url + request)
        )
    }

    async getAlumnosByCursoAsync(idCurso: number): Promise<Alumno[]> {
        let request = "api/Alumnos/FiltrarCursoToken/" + idCurso;

        return firstValueFrom(
            this._http.get<Alumno[]>(this.url + request)
        )
    }

    async getCursosAsync(): Promise<number[]> {
        let request = "api/Alumnos/Cursos";

        return firstValueFrom(
            this._http.get<number[]>(this.url + request, {context: new HttpContext().set(SKIP_TOKEN, true)})
        )
    }

    async postNuevoAlumno(alumno: Alumno): Promise<any> {
        let request = "api/Alumnos/InsertAlumnoToken";
        let json = JSON.stringify(alumno)
        let header = new HttpHeaders()
            .set("content-type", "application/json");

        return firstValueFrom(
            this._http.post<any>(this.url + request, json, {headers: header})
        )
    }

    async deleteAlumnoAsync(idAlumno:number): Promise<any> {
        let request = "api/Alumnos/DeleteAlumnoToken/" + idAlumno;

        return firstValueFrom(
            this._http.get(this.url + request)
        )
    }
}