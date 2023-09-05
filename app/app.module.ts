  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { RouteReuseStrategy } from '@angular/router';
  import { FooterComponent } from './pages/footer/footer.component'; // Ruta correcta si el archivo está en src/app/footer

  import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

  import { AppComponent } from './app.component';
  import { AppRoutingModule } from './app-routing.module';

  @NgModule({
    declarations: [AppComponent, FooterComponent],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
