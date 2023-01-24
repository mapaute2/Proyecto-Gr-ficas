import { Component, OnInit } from '@angular/core';

import { Chart, ChartItem } from 'chart.js/auto';

import { Data } from '../../interfaces/data.interface';
import * as data from '../../../assets/data1.json';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: []
})
export class LineComponent implements OnInit {

  ngOnInit(): void {
    const datos: Data[] = (data as any).default;
    this.createBarChart(datos);
  }


  createBarChart(data: Data[]) {
    const ctx: ChartItem = document.getElementById('bar-chart') as ChartItem;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(d => d.label),
        datasets: [
          {
            label: 'Presupuesto',
            data: data.map(d => d.value),
            backgroundColor: 'rgba(69, 248, 84, 0.8)',
            borderColor: 'rgba(69, 248, 84, 0.8)',
            borderWidth: 1,
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
