# Graficas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Pasos para crear el proyecto con [Chart.js](https://www.chartjs.org/)

1. Crear el proyecto con Angular CLI  

```markdown
ng new graficas
```

2. Levantar servidor Angular

```markdown
ng serve -o
```

3. Instalar [Chart.js](https://www.chartjs.org/)

```markdown
npm install chart.js
```

4. Crear componentes

``` markdown
ng g c home --skip-tests -s
ng g c graficas/barras --skip-tests -s
ng g c graficas/barras-dobles --skip-tests -s
ng g c graficas/dona --skip-tests -s
ng g c graficas/line --skip-tests -s
```

5. Importar en el componente donde se va a crear la gráfica Chart js

```typescript
import * as Chart from 'chart.js';
```

6. En el `tsconfig.json` agregar la siguiente línea

```json
"compilerOptions": {
    "resolveJsonModule": true,
    "esModuleInterop": true,
    ...
  }
```

7. Importar el json en el componente donde se va a crear la gráfica

```typescript
mport * as data from '../../../assets/data1.json';
```

8. Crear una interfaz para el json

```typescript
export interface Data {
  label: string;
  value: number;
}
```

9. Crear el componente en el html donde se va a crear la gráfica

```html
<canvas id="bar-chart"></canvas>
```

10. Crear la gráfica en el componente

```typescript
import { Chart, ChartItem } from 'chart.js/auto';

import { Data } from '../../interfaces/data.interface';
import * as data from '../../../assets/data1.json';

const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: data.map(d => d.label),
    datasets: [
      {
        label: 'Variable 1',
        data: data.map(d => d.value),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
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
  },
});
```

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
