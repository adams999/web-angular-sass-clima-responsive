import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-target-clima',
  templateUrl: './target-clima.component.html',
  styleUrls: ['./target-clima.component.scss'],
})
export class TargetClimaComponent implements OnInit {
  cityParamParis: string = 'Paris,,FR';
  cityParamTachira: string = 'San Cristobal,,VE';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
}
