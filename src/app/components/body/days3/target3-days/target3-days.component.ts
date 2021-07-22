import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as moment from 'moment';
@Component({
  selector: 'app-target3-days',
  templateUrl: './target3-days.component.html',
  styleUrls: ['./target3-days.component.scss'],
})
export class Target3DaysComponent implements OnInit {
  @Input() indice: any;
  latBogota: string = '4.673253393936639';
  lonBogota: string = '-74.10093754648891';
  dataDay: any;
  dataGeneral: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getClima3daysNextBogota(this.latBogota, this.lonBogota)
      .subscribe((data: any) => {
        data.daily[
          this.indice
        ].weather[0].icon_custom = `https://openweathermap.org/img/wn/${
          data.daily[this.indice].weather[0].icon
        }@2x.png`;
        this.dataGeneral = data;
        this.dataDay = data.daily[this.indice];
      });
  }

  getDayWeek() {
    let dayNextWeek = moment().add(this.indice, 'd').format('dddd');
    return dayNextWeek;
  }
}
