import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-widwet-temp',
  templateUrl: './widwet-temp.component.html',
  styleUrls: ['./widwet-temp.component.scss'],
})
export class WidwetTempComponent implements OnInit {
  dataClima: any;
  cityParam: string = 'Bogota,,CO';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getClimaAct(this.cityParam).subscribe((data: any) => {
      data.weather[0].icon_custom = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      this.dataClima = data;
      console.log(data);
    });
  }
}
