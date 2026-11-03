import { HttpInterceptorFn } from '@angular/common/http';
import { SKIP_TOKEN } from '../utils/token.context';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  //ANTES DE NADA PREGUNTAMOS SI VIENE EN EL REQUEST SKIP_TOKEN
  if(req.context.get(SKIP_TOKEN)){
    //DEVOLVEMOS LA RESPUESTA ORIGINAL
    return next(req);
  }
  const token = sessionStorage.getItem("TOKEN");
  //SI TENEMOS TOKEN DEBEMOS CLONAR LA PETICION
  if(token) {
    //DEBEMOS CLONAR LA PETICION
    const tokenRequest = req.clone({
      setHeaders: {
        Authorization: "bearer " + token
      }
    })
    //DEVOLVEMOS LA PETICION DEL TOKEN
    return next(tokenRequest);
  }
  return next(req);
};
