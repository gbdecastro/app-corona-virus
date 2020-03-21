import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Platform } from "@ionic/angular";

import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-world',
  templateUrl: './world.page.html',
  styleUrls: ['./world.page.scss'],
})
export class WorldPage implements OnInit {

  locate: any;

  constructor(
    private activedRouter: ActivatedRoute,
    private platform: Platform,
    private router: Router) { }

  ngOnInit() {
    this.activedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.locate = this.router.getCurrentNavigation().extras.state.locate
        this.loadCharts()

      } else {
        this.router.navigateByUrl('tabs/tab2')
      }
    })
  }

  loadCharts() {

    const w = this.platform.width() - 30

    HighCharts.chart("barChart", {
      chart: {
        type: "bar",
        width: w
      },
      title: {
        text: "Relação entre Confirmados x Mortes x Recuperados"
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
            formatter: function () {
              return this.y.toFixed(2) + "%";
            }
          }
        }
      },
      responsive: {
        rules: [{
          condition: {
            maxWidth: w
          },
        }]
      },
      series: [
        {
          type: undefined,
          name: "Casos Confirmados",
          color: '#eb445a',
          data: [
            100 -
            (
              ((this.locate.attributes.Recovered * 100) / this.locate.attributes.Confirmed) +
              ((this.locate.attributes.Deaths * 100) / this.locate.attributes.Confirmed)
            )
          ]
        },
        {
          type: undefined,
          name: "Recuperados Confirmadas",
          color: '#2dd36f',
          data: [(this.locate.attributes.Recovered * 100) / this.locate.attributes.Confirmed]
        },   
        {
          type: undefined,
          name: "Mortes Confirmadas",
          color: '#222428',
          data: [(this.locate.attributes.Deaths * 100) / this.locate.attributes.Confirmed]
        }
      ]
    });

  }

  setRouter() {
    this.router.navigateByUrl('tabs/tab2')
  }

}
