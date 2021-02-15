import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  constructor() { }

  message = new BehaviorSubject('');
  sharedMessage = this.message.asObservable();
  setMessage(msg) {
    this.message.next(msg);
  }
}
