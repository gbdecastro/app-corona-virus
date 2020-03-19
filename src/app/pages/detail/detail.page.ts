import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public locate: any;

  constructor(
    private activedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activedRouter.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.locate = this.router.getCurrentNavigation().extras.state.locate

        if(!this.locate.hasOwnProperty('deaths')){
          this.locate.deaths = 0;
        }

        if(!this.locate.hasOwnProperty('cases')){
          this.locate.cases = 0;
        }    
        
        if(!this.locate.hasOwnProperty('suspects')){
          this.locate.suspects = 0;
        }   

        if(!this.locate.hasOwnProperty('refuses')){
          this.locate.refuses = 0;
        }              

      }else{
        this.router.navigateByUrl('')
      }
    }) 
  }

}
