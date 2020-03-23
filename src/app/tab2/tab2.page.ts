import { Component, OnInit, ViewChild } from "@angular/core";
import { ApiService } from "../services/api.service";
import { StorageService } from "../services/storage.service";
import { Router, NavigationExtras } from "@angular/router";
import { LoadingController, AlertController, IonSelect } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page implements OnInit {
  locates: any = null;
  locatesFiltred: any = null;

  interfaceOptions: any = {
    header: "Ordenar por"
  };

  @ViewChild("selectOrdenar", null) select: IonSelect;

  constructor(
    private storage: StorageService,
    private api: ApiService,
    private router: Router,
    private loading: LoadingController,
    private alert: AlertController
  ) {}

  doRefresh(event) {
    this.getInit()
    event.target.complete();
  }

  ngOnInit() {
    this.getInit()
  }

  getInit(){
    let load = this.loading.create({
      message: "Atualizando Dados..."
    });

    load.then(a => a.present());

    this.api
      .getWorld()
      .then((resp: any) => {
        resp.then(() => {
          this.getLocates();
          load.then(a => a.dismiss());
        });
      })
      .catch(() => {
        this.getLocates();
        load.then(a => a.dismiss());
      });
  }

  getLocates() {
    this.storage.get("world").then(storage => {
      if (storage != null) {
        this.locates = storage;
        this.locatesFiltred = this.locates.data

        let event =  {
          target: {
            value: this.select.value
          }
        }
        this.sortData(event)        

      } else {
        this.alert
          .create({
            header: "Atenção",
            message: "Verifique sua conexão com a Internet"
          })
          .then(a => a.present());
      }
    });
  }

  clearLocates() {
    this.locatesFiltred = null;
    this.getLocates();
  }

  searchLocates(ev: any) {
    if (ev.target.value != "") {
      let locates = [];
      this.locatesFiltred.forEach(locate => {
        if (
          this.removeAcentos(locate.attributes.Country_Region)
            .toString()
            .toLowerCase()
            .indexOf(
              this.removeAcentos(ev.target.value)
                .toString()
                .toLowerCase()
            ) > -1 ||
          (locate.attributes.Province_State != null &&
            this.removeAcentos(locate.attributes.Province_State)
              .toString()
              .toLowerCase()
              .indexOf(
                this.removeAcentos(ev.target.value)
                  .toString()
                  .toLowerCase()
              ) > -1)
        ) {
          locates.push(locate);
        }
      });

      if (locates.length > 0) this.locatesFiltred = locates;
      else this.locatesFiltred = this.locates;
    } else {
      this.getLocates()
    }
  }

  removeAcentos(string) {
    var map = {
      â: "a",
      Â: "A",
      à: "a",
      À: "A",
      á: "a",
      Á: "A",
      ã: "a",
      Ã: "A",
      ê: "e",
      Ê: "E",
      è: "e",
      È: "E",
      é: "e",
      É: "E",
      î: "i",
      Î: "I",
      ì: "i",
      Ì: "I",
      í: "i",
      Í: "I",
      õ: "o",
      Õ: "O",
      ô: "o",
      Ô: "O",
      ò: "o",
      Ò: "O",
      ó: "o",
      Ó: "O",
      ü: "u",
      Ü: "U",
      û: "u",
      Û: "U",
      ú: "u",
      Ú: "U",
      ù: "u",
      Ù: "U",
      ç: "c",
      Ç: "C"
    };
    return string.replace(/[\W\[\] ]/g, function(a) {
      return map[a] || a;
    });
  }

  openDetails(locate) {
    let navigation: NavigationExtras = {
      state: {
        locate: locate
      }
    };
    this.router.navigateByUrl("detail/world", navigation);
  }

  openSelectOrdenar() {
    this.select.open();
  }

  sortData(event: any) {
    const index = event.target.value.split("-")[0];
    const order = event.target.value.split("-")[1];

    this.locatesFiltred.sort(function(a, b) {
      if (order == "crescente") {
        if (a.attributes[index] < b.attributes[index]) {
          return -1;
        }
        if (a.attributes[index] > b.attributes[index]) {
          return 1;
        }
      } else {
        if (a.attributes[index] < b.attributes[index]) {
          return 1;
        }
        if (a.attributes[index] > b.attributes[index]) {
          return -1;
        }
      }
    });
  }
  
}
