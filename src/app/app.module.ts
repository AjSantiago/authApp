import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Auth0
import { AuthModule } from '@auth0/auth0-angular';

//Rutas
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

//Servicios
//import { AuthGuardService } from './services/auth-guard.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    AuthModule.forRoot({
      domain: 'santi-sama.us.auth0.com',
      clientId: '2AeXdJMPuQ513u2IznjkeuGlx0or8nEY',
      cacheLocation: 'localstorage',
      useRefreshTokens: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
