import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  constructor() {}
  @Input()
  tileNation: string[] = [];
  @Input()
  tileCityName: string[] = [];

  tileCelsius: string = '';
  tileIcon: string = '';

  cityData = {
    tileCityName: [],
    test2: '',
    test3: '',
    test4: '',
  };
  ngOnInit(): void {}
}
