import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  message1: string
  message2: string

  constructor() { }

  setMessage(data1, data2) {
    this.message1 = data1;
    this.message2 = data2;
  }

  getMessage1() {
    return this.message1;
  }

  getMessage2() {
    return this.message2;
  }
}
