import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  subject = new Subject();
  observable = this.subject.asObservable();

  constructor(private http: HttpClient) {}

  getData(cityName: string): Observable<any> {
    return this.http.get(
      `${environment.url}weather?q=${cityName}&appid=${environment.APYkey}`
    );
  }
}
