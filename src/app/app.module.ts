import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { CabeceroComponent } from './components/body/cabecero/cabecero.component';
import { DataService } from './services/data.service';
import { Days3Component } from './components/body/days3/days3.component';
import { Target3DaysComponent } from './components/body/days3/target3-days/target3-days.component';
import { VisitComponent } from './components/body/visit/visit.component';
import { TargetPaisGComponent } from './components/body/visit/target-pais-g/target-pais-g.component';
import { ImagesTargetsComponent } from './components/body/images-targets/images-targets.component';
import { TargetRevisionComponent } from './components/body/images-targets/target-revision/target-revision.component';
import { TargetLocationSComponent } from './components/body/images-targets/target-location-s/target-location-s.component';
import { TargetLocationMComponent } from './components/body/images-targets/target-location-m/target-location-m.component';
import { TargetClimaComponent } from './components/body/target-clima/target-clima.component';
import { TargetInfoClimaComponent } from './components/body/target-clima/target-info-clima/target-info-clima.component';
import { TargetAddLocationsComponent } from './components/body/target-clima/target-add-locations/target-add-locations.component';
import { WidwetTempComponent } from './components/body/cabecero/widwet-temp/widwet-temp.component';
import { LogoComponent } from './components/body/cabecero/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    CabeceroComponent,
    Days3Component,
    Target3DaysComponent,
    VisitComponent,
    TargetPaisGComponent,
    ImagesTargetsComponent,
    TargetRevisionComponent,
    TargetLocationSComponent,
    TargetLocationMComponent,
    TargetClimaComponent,
    TargetInfoClimaComponent,
    TargetAddLocationsComponent,
    WidwetTempComponent,
    LogoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
