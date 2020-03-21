import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { StorageService } from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public BASE_URL = "http://localhost:3000/";

  constructor(private http: HttpClient, private storage: StorageService) { }

  getAllData() {
    return new Promise(resolve => {
      this.getBrazil()
        .finally(() => {
          this.getWorld()
            .finally(() => {
              resolve(true)
            })
        })
    })
  }

  getBrazil() {
    return new Promise(resolve => {
      this.http.get(this.BASE_URL + "api/data/brazil")
        .subscribe(
          (data: any) => {

            let organizate = []
            let state = []

            data.forEach(e => {
              if (e.properties.local == "-") {
                
                //correçao de calculo da api para casos confirmados por regiao
                let casosconfirmados = 0
                state.forEach(s => {
                  casosconfirmados += s.properties.casosconfirmados
                })
                e.properties.casosconfirmados = casosconfirmados
                organizate.push(e)
                
                state.forEach(s => {
                  casosconfirmados += s.properties.casosconfirmados
                  s.properties.regiao = e.properties.estado_geo
                  organizate.push(s)
                })
                state = []
              } else {
                state.push(e)
              }
            });

            this.storage.set("brazil", organizate);
            resolve(true)
          },
          (err) => {
            resolve(false)
          }
        )
    })
  }

  getWorld() {
    return new Promise(resolve => {
      this.http.get(this.BASE_URL + "api/data/world")
        .subscribe(
          (data: any) => {
            data.sort(function (a, b) {
              if (a.attributes.Country_Region < b.attributes.Country_Region) { return -1 }
              if (a.attributes.Country_Region > b.attributes.Country_Region) { return 1 }
            })
            this.storage.set("world", data);
            resolve(true)
          },
          (err: any) => {
            resolve(false)
          }
        )
    })
  }

}
