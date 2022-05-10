import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'base-app-bwl';
  // helper = new JwtHelperService();// You need install @auth0/angular-jwt

  constructor(
    // private localStorage: StorageService,
    // private permissionsSrv: NgxPermissionsService
  ) {
    // --
    // Restore permissions
    // --
    // let sessionData = this.localStorage.getLocal("session_data");
    // if (!!sessionData) {
    //   let encodeToken = sessionData.token;
    //   let permissions = [];
    //   const decodeToken = this.helper.decodeToken(encodeToken);
    //   decodeToken.rls.forEach(value => { permissions.push(value);});
    //   this.permissionsSrv.loadPermissions(permissions);
    // }
  }

  ngAfterViewInit(){

    document.querySelector("body").classList.add("theme-light");
    setTimeout(()=>{
       // document.querySelector("body").classList.add("theme-dark");
    },5000)

  }
}
