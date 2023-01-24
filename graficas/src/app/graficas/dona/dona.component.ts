import { Component, OnInit } from '@angular/core';

import { Chart, ChartItem } from 'chart.js/auto';

import { Data } from '../../interfaces/data.interface';
import * as data from '../../../assets/data1.json';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: []
})
export class DonaComponent implements OnInit {

  ngOnInit(): void {
    const datos: Data[] = (data as any).default;
    this.createBarChart(datos);
  }


  createBarChart(data: Data[]) {
    const ctx: ChartItem = document.getElementById('bar-chart') as ChartItem;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: data.map(d => d.label),
        datasets: [
          {
            label: 'Presupuesto',
            data: data.map(d => d.value),
          }
        ],
      },
      /*options: {
        scales: {
          y: {
            beginAtZero: true,
            stacked: true,
          },
        },
      }*/
    });
  }

}
