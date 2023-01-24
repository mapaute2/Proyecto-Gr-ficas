import { Component, OnInit } from '@angular/core';

import { Chart, ChartItem } from 'chart.js/auto';

import { Data, Data2 } from '../../interfaces/data.interface';
import * as data2 from '../../../assets/data2.json';

@Component({
  selector: 'app-barras-dobles',
  templateUrl: './barras-dobles.component.html',
  styleUrls: []
})
export class BarrasDoblesComponent implements OnInit {

  ngOnInit(): void {
    const datos: Data2[] = (data2 as any).default;
    this.createBarChart(datos);
  }


  createBarChart(data: Data2[]) {
    const ctx: ChartItem = document.getElementById('bar-chart') as ChartItem;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(d => d.label),
        datasets: [
          {
            label: 'Presupuesto',
            data: data.map(d => d.value1)
          },
          {
            label: 'Saldo',
            data: data.map(d => d.value2)
          }
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            stacked: true,
          },
        },
      }
    });
  }

}
