import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

import { AuthGuardService } from './services/auth-guard.service';
//import { AuthGuard } from '@auth0/auth0-angular';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'precios', component: PreciosComponent },
  {
    path: 'protegida',
    component: ProtegidaComponent,
    canActivate: [AuthGuardService],
  },
  { path: '**', component: HomeComponent },
];

// @NgModule({
//   imports: [RouterModule.forChild(ROUTES)],
//   exports: [RouterModule],
// })
// export class FeatureRoutingModule {}

//export const APP_ROUTING = RouterModule.forRoot(ROUTES);
