import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weather-app';
  cityName: string[] = [];
  nation: string[] = [];
  celsius: string[] = [];
  icon: any;
  constructor(private appservice: AppService) {}

  getCityData(cityName: string): void {
    this.appservice.getData(cityName).subscribe({
      next: (data: any) => {
        this.cityName.push(data.name);
        this.nation.push(data.sys.country);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
