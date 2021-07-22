import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  urlClimaActual: string = 'https://api.openweathermap.org/data/2.5/weather?';
  urlClimaDiario: string = 'https://api.openweathermap.org/data/2.5/forecast?';
  bogotaColombia: string = 'Bogota,,CO';
  parisFrancia: string = 'Paris,,FR';
  appId: string = '&appid=4b8ffff687b78eea80a52d01f3dd1e93';
  units: string = '&units=metric';
  cant: string = '&cnt=20';

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

  getClima3daysNext(paramCity: string = this.parisFrancia) {
    return this.http.get(
      this.urlClimaDiario +
        'q=' +
        paramCity +
        this.units +
        this.cant +
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
