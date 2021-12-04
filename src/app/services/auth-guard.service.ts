import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
} from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log(next);

    // if (this.auth.isAuthenticated$.pipe()) {
    //   console.log('Paso el guard');
    //   //console.log(this.auth.isLoading$);
    //   return true;
    // } else {
    //   console.error('Bloqueado por el guard');
    //   return false;
    // }
    return this.auth.isAuthenticated$.pipe(
      tap((loggedIn) => {
        if (loggedIn) {
          console.log('Acceso permitido');
        } else {
          console.log('No autorizado');
          this.router.navigate(['/home']);
        }
      })
    );
  }
}
