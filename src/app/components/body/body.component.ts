import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as moment from 'moment';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.dataService.getClimaParisAct().subscribe((data: any) => {
    //   console.log(data);
    // });

    // this.dataService.getClima3daysBogota().subscribe((data: any) => {
    //   for (const clima of data.list) {
    //     //console.log(clima);
    //   }

    //   // console.log(data.list);
    // });
  }
}
