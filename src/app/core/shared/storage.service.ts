import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage = localStorage;

  constructor() {}

  setItem(key: string, value: any): any {
    if (typeof value !== 'string') value = JSON.stringify(value);
    this.storage.setItem(key, value);
    return this.getItem(key);
  }

  getItem(key) {
    return this.storage.getItem(key);
  }

  getItemTo<T>(key): T {
    const item = this.getItem(key);
    if (item != null) {
      try {
        if (typeof item === 'string') return JSON.parse(item);
        else return item;
      } catch (error) {
        this.removeItem(key);
        console.error(`item ${key} was not found`);
        return null;
      }
    }
  }

  removeItem(key) {
    this.storage.removeItem(key);
  }
}
