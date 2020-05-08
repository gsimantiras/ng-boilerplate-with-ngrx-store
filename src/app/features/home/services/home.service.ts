import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
  constructor() {}

  get() {
    console.log('get');
  }
}
