import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Platform } from "@ionic/angular";

import * as HighCharts from 'highcharts';
@Component({
  selector: 'app-brazil',
  templateUrl: './brazil.page.html',
  styleUrls: ['./brazil.page.scss'],
})
export class BrazilPage implements OnInit {

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
        this.router.navigateByUrl('')
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
        text: "Relação entre Suspeitos x Descartados"
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
          name: "Casos Suspeitos",
          color: '#ffc409',
          data: [this.locate.properties.taxacasossuspeitos]
        },
        {
          type: undefined,
          name: "Casos Descartados",
          color: '#2dd36f',
          data: [this.locate.properties.taxacasosdescartados]
        }
      ]
    });

    HighCharts.chart("barChart2", {
      chart: {
        type: "bar",
        width: w
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
          data: [100 - ((this.locate.properties.obitos * 100) / this.locate.properties.casosconfirmados)]
        },
        {
          type: undefined,
          name: "Mortes Confirmadas",
          color: '#222428',
          data: [((this.locate.properties.obitos * 100) / this.locate.properties.casosconfirmados)]
        }
      ]
    });

  }

  setRouter() {
    this.router.navigateByUrl('tabs/tab1')
  }

}
