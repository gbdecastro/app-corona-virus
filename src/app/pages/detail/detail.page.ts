import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Platform } from "@ionic/angular";

import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  locate: any;
  type: any;

  constructor(
    private activedRouter: ActivatedRoute,
    private platform: Platform,
    private router: Router) { }

  ngOnInit()
  {
    this.activedRouter.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.locate = this.router.getCurrentNavigation().extras.state.locate
        this.type = this.router.getCurrentNavigation().extras.state.type

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

        this.loadCharts()

      }else{
        this.router.navigateByUrl('')
      }
    }) 
  }

  loadCharts()
  {

    const h = this.platform.height()-15
    const w = this.platform.width()-15

    HighCharts.chart("barChart", {
      chart: {
        type: "bar",
        height: h,
        width: w
      },
      title: {
        text: "Relação entre Suspeitos x Descartados x Confirmados"
      },
      xAxis: {
        visible: false,
        categories: ["Corona Vírus"]
      },
      credits: {
        enabled: false
      },
      yAxis: {
        visible: false,
        title: {
          text: "Valores"
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            formatter: function() {
              return this.y.toFixed(2) + "%";
            }
          }
        }
      },
      responsive: {
        rules: [{
          condition: {
            maxWidth: 150
          },
        }]
      },         
      series: [
        {
          type: undefined,
          name: "Casos Suspeitos",
          color: '#ffc409',
          data: [
            100 - (
              ((this.locate.refuses * 100) / this.locate.suspects)
              +
              ((this.locate.cases * 100) / this.locate.suspects)
            )
          ]
        },
        {
          type: undefined,
          name: "Casos Descartados",
          color: '#2dd36f',
          data: [(this.locate.refuses * 100) / this.locate.suspects]
        },
        {
          type: undefined,
          name: "Casos Confirmados",
          color: '#eb445a',
          data: [(this.locate.cases * 100) / this.locate.suspects]
        }
      ]
    });

    HighCharts.chart("barChart2", {
      chart: {
        type: "bar"
      },
      title: {
        text: "Relação entre Confirmados e Mortes"
      },
      xAxis: {
        visible: false,
        categories: ["Corona Vírus"]
      },
      credits: {
        enabled: false
      },
      yAxis: {
        visible: false,
        title: {
          text: "Valores"
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            formatter: function() {
              return this.y.toFixed(2) + "%";
            }
          }
        }
      },
      responsive: {
        rules: [{
          condition: {
            maxWidth: 150
          },
        }]
      },        
      series: [
        {
          type: undefined,
          name: "Casos Confirmados",
          color: '#eb445a',
          data: [
            100-((this.locate.deaths * 100) / this.locate.cases)
          ]
        },
        {
          type: undefined,
          name: "Mortes Confirmadas",
          color: '#222428',
          data: [(this.locate.deaths * 100) / this.locate.cases]
        }
      ]
    });    

  }

  setRouter()
  {
    if(this.type == 'brazil')
      this.router.navigateByUrl('tabs/tab1')
    else
      this.router.navigateByUrl('tabs/tabs2')
  }
}
