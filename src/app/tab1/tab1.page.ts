import { Component, OnInit } from "@angular/core";
import { StorageService } from "../services/storage.service";
import { ApiService } from "../services/api.service";
import { Router, NavigationExtras } from "@angular/router";
import { AlertController } from '@ionic/angular';

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
    private alert: AlertController) {}

  ngOnInit()
  {
    let atualizandoAlert = this.alert.create({
      backdropDismiss: false,
      message: "Atualizando Dados...",
      keyboardClose: false
    })

    atualizandoAlert.then((a) => a.present())

    this.api.getBrazil()
      .then(response => {
        if(response){
          this.getLocates()
        }
      })

  }

  getLocates()
  {
    this.storage.get('brazil')
      .then((storage)=>{
        this.locates = storage
        this.locatesFiltred = this.locates
      })
  } 

  clearLocates() {
    this.locatesFiltred = null;
    this.getLocates()
  }

  searchLocates(ev: any) {
    this.locatesFiltred = null;

    if(ev.target.value != ''){
      let locates = []
      this.locatesFiltred.forEach((locate)=>{
        if(this.removeAcentos(locate.name).toString().toLowerCase().indexOf(this.removeAcentos(ev.target.value).toString().toLowerCase()) > -1){
          locates.push(locate)
        }
      })

      if(locates.length > 0)
        this.locatesFiltred = locates
      else
        this.locatesFiltred = this.locates.values 

    }else{
      this.locatesFiltred = this.locates.values
    }
    this.locatesFiltred = null
  }

  removeAcentos(string){
    var map={"â":"a","Â":"A","à":"a","À":"A","á":"a","Á":"A","ã":"a","Ã":"A","ê":"e","Ê":"E","è":"e","È":"E","é":"e","É":"E","î":"i","Î":"I","ì":"i","Ì":"I","í":"i","Í":"I","õ":"o","Õ":"O","ô":"o","Ô":"O","ò":"o","Ò":"O","ó":"o","Ó":"O","ü":"u","Ü":"U","û":"u","Û":"U","ú":"u","Ú":"U","ù":"u","Ù":"U","ç":"c","Ç":"C"};
    return string.replace(/[\W\[\] ]/g,function(a){return map[a]||a})    
  }    

  openDetails(locate)
  {
    let navigation: NavigationExtras = {
      state: {
        locate: locate,
        type: 'brazil'
      }
    }
    this.router.navigateByUrl('detail',navigation)
  }
}
