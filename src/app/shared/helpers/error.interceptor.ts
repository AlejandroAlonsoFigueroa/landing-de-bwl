// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { LoginService } from "../../pages/login/login.service";
// import {Router} from "@angular/router";

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {
//   constructor(private authenticationService: LoginService,
//               private router: Router) { }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return next.handle(request).pipe(catchError(err => {
//       if (err.status === 401) {
//         if (this.router.url.indexOf("login") == 0 || this.router.url.indexOf("admin") == 0) {
//           this.authenticationService.doLogout();
//           location.reload(true);
//         }
//       }

//       const error = err.error.message || err.statusText;
//       return throwError(error);
//     }))
//   }
// }
