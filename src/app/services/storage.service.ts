import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private api: ApiService, private storage: Storage) { }

  async loadData()
  {
    return this.api.getBrazil()
      .subscribe(
        (data)=>{
          this.storage.set("brazil",data);
          this.api.getBrazilStates()
          .subscribe(
            (data)=>{
              this.storage.set("brazil-states",data);
              this.api.getWorld()
              .subscribe(
                (data)=>{
                  this.storage.set("world",data);
                }
              )              
            }
          )
        }
      )      
  }

  get(string:string)
  {
    return this.storage.get(string);
  }
}
