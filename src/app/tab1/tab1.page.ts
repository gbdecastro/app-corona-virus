import { Component, OnInit } from "@angular/core";
import { StorageService } from "../services/storage.service";
import { ApiService } from "../services/api.service";
import { Router, NavigationExtras } from "@angular/router";
import { LoadingController } from '@ionic/angular';

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})

export class Tab1Page implements OnInit {
  locates: any = null;
  locatesFiltred: any = null;

  constructor(
    private storage: StorageService,
    private api: ApiService,
    private router: Router, 
    private loading: LoadingController) {}

  ngOnInit()
  {
    let load = this.loading.create({
      message: "Atualizando Dados..."
    })

    load.then((a) => a.present())

    this.api.getBrazil()
    .finally(()=>{
      this.getLocates()
    })

  }

  getLocates()
  {
    this.storage.get('brazil')
      .then((storage)=>{
        this.locates = storage
        this.locatesFiltred = this.locates
        this.loading.dismiss()
      })
  } 

  clearLocates() {
    this.locatesFiltred = null;
    this.getLocates()
  }

  searchLocates(ev: any) {
    if(ev.target.value != ''){
      let locates = []
      this.locatesFiltred.forEach((locate)=>{
        if(this.removeAcentos(locate.properties.estado_geo).toString().toLowerCase().indexOf(this.removeAcentos(ev.target.value).toString().toLowerCase()) > -1
          ||
          (
            locate.properties.hasOwnProperty('regiao') &&
            this.removeAcentos(locate.properties.regiao).toString().toLowerCase().indexOf(this.removeAcentos(ev.target.value).toString().toLowerCase()) > -1
          )){
          locates.push(locate)
        }
      })

      if(locates.length > 0)
        this.locatesFiltred = locates
      else
        this.locatesFiltred = this.locates 

    }else{
      this.locatesFiltred = this.locates
    }
  }

  removeAcentos(string){
    var map={"â":"a","Â":"A","à":"a","À":"A","á":"a","Á":"A","ã":"a","Ã":"A","ê":"e","Ê":"E","è":"e","È":"E","é":"e","É":"E","î":"i","Î":"I","ì":"i","Ì":"I","í":"i","Í":"I","õ":"o","Õ":"O","ô":"o","Ô":"O","ò":"o","Ò":"O","ó":"o","Ó":"O","ü":"u","Ü":"U","û":"u","Û":"U","ú":"u","Ú":"U","ù":"u","Ù":"U","ç":"c","Ç":"C"};
    return string.replace(/[\W\[\] ]/g,function(a){return map[a]||a})    
  }    

  openDetails(locate)
  {
    let navigation: NavigationExtras = {
      state: {
        locate: locate
      }
    }
    this.router.navigateByUrl('detail/brazil',navigation)
  }
}
