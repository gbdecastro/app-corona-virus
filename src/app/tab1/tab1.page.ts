import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})

export class Tab1Page implements OnInit {
  public searching: Boolean = false;
  public locates: any = null;
  public locatesFiltred: any = null;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit()
  {
    this.getLocates();
  }

  getLocates()
  {

    this.api.getBrazil()
      .subscribe(
        (data:any) => {

          data.values.forEach(state => {
            switch (state.uid) {
              case 13:
                state.name = 'Amazonas';
                break;
              case 11:
                state.name = 'Rondonia';
                break;
              case 12:
                state.name = 'Acre';
                break;
              case 14:
                state.name = 'Roraima';
                break;
              case 15:
                state.name = 'Pará';
                break;
              case 16:
                state.name = 'Amapá';
                break;
              case 17:
                state.name = 'Tocatins';
                break;
              case 21:
                state.name = 'Maranhão';
                break;
              case 22:
                state.name = 'Piauí';
                break;
              case 23:
                state.name = 'Ceará';
                break;
              case 24:
                state.name = 'Rio Grande do Norte';
                break;
              case 25:
                state.name = 'Paraíba';
                break;
              case 26:
                state.name = 'Pernanbuco';
                break;
              case 27:
                state.name = 'Alagoas';
                break;
              case 28:
                state.name = 'Sergipe';
                break;
              case 29:
                state.name = 'Bahia';
                break;
              case 31:
                state.name = 'Minas Gerais';
                break;
              case 32:
                state.name = 'Espírito Santo';
                break;
              case 33:
                state.name = 'Rio de Janeiro';
                break;
              case 35:
                state.name = 'São Paulo';
                break;
              case 41:
                state.name = 'Paraná';
                break;
              case 42:
                state.name = 'Santa Catarina';
                break;
              case 43:
                state.name = 'Rio Grande do Sul';
                break;
              case 50:
                state.name = 'Mato Grosso do Sul';
                break;
              case 51:
                state.name = 'Mato Grosso';
                break;
              case 52:
                state.name = 'Goiás';
                break;
              case 53:
                state.name = 'Distrito Federal';
                break;
            }
          });

          data.values.sort(function(a,b) {
            if(a.name < b.name) { return -1 }
            if(a.name > b.name) { return 1 }
          })          

          this.locates = data
          this.locatesFiltred = data.values
        }
      )
  }

  readLocate()
  {
    return this.locates
  }

  clearLocates() {
    this.searching = false;
    this.getLocates()
  }

  searchLocates(ev: any) {
    this.searching = true;

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
    this.searching = false
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
    this.router.navigate(['detail'], navigation)
  }
}
