import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-target-info-clima',
  templateUrl: './target-info-clima.component.html',
  styleUrls: ['./target-info-clima.component.scss'],
})
export class TargetInfoClimaComponent implements OnInit {
  @Input() city: any;

  dataClima: any;
  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getClimaAct(this.city).subscribe((data: any) => {
      data.weather[0].icon_custom = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      data.sys.countryDescription = this.dataService.getCountries(
        data.sys.country
      );
      this.dataClima = data;
    });
  }
}
