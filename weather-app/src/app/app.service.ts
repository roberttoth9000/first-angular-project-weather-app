import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  subject = new Subject();
  observable = this.subject.asObservable();
  constructor() {}
}
