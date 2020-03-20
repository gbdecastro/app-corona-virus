import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  set(keyName:string,data:any)
  {
    this.storage.set(keyName,data);
  }

  get(string:string)
  {
    return this.storage.get(string);
  }
}
