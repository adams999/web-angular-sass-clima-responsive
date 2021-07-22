import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  urlClimaActual: string = 'https://api.openweathermap.org/data/2.5/weather?';
  urlClimaDiario: string = 'https://api.openweathermap.org/data/2.5/onecall?';
  bogotaColombia: string = 'Bogota,,CO';
  parisFrancia: string = 'Paris,,FR';
  latBogota: string = '4.673253393936639';
  lonBogota: string = '-74.10093754648891';
  appId: string = '&appid=4b8ffff687b78eea80a52d01f3dd1e93';
  units: string = '&units=metric';
  cant: string = '&cnt=20';
  exclude: string = '&exclude=hourly,minutely';

  constructor(public http: HttpClient) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
  }

  getClimaAct(paramCity: string = this.bogotaColombia) {
    return this.http.get(
      this.urlClimaActual + 'q=' + paramCity + this.units + this.appId
    );
  }

  getClima3daysNextBogota(
    lat: string = this.latBogota,
    lon: string = this.lonBogota
  ) {
    return this.http.get(
      this.urlClimaDiario +
        '&lat=' +
        lat +
        '&lon=' +
        lon +
        this.units +
        this.cant +
        this.exclude +
        this.appId
    );
  }

  getCountries(iso: string = 'VE') {
    let countries: any = [
      {
        VE: 'Venezuela',
        CO: 'Colombia',
        FR: 'Francia',
      },
    ];

    return countries[0][iso];
  }
}
