// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { LoginService } from "../../pages/login/login.service";
// import { JwtHelperService } from '@auth0/angular-jwt';


// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate {
//   helper = new JwtHelperService();

//   constructor(
//     private router: Router,
//     private authenticationService: LoginService
//   ) { }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   const currentUser = this.authenticationService.currentTokenValue;
  //   if (currentUser) {
  //     if (this.isTokenExpired(currentUser.token) && this.helper.isTokenExpired(currentUser.token)) {
  //       this.forceQuitSession();
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  //   this.forceQuitSession();
  //   return false;
  // }

  // isTokenExpired(token: string): boolean {
  //   const date = this.helper.getTokenExpirationDate(token);
  //   if(date === undefined) return false;
  //   return !(date.valueOf() > new Date().valueOf());
  // }

  // forceQuitSession(){
  //   this.authenticationService.doLogout().then(()=>this.router.navigate(['/login']));
  // }

// }
