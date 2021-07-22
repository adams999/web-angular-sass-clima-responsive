import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-target-clima',
  templateUrl: './target-clima.component.html',
  styleUrls: ['./target-clima.component.scss'],
})
export class TargetClimaComponent implements OnInit {
  cityParamParis: string = 'Paris,,FR';
  cityParamTachira: string = 'San Cristobal,,VE';

  constructor() {}

  ngOnInit(): void {}
}
