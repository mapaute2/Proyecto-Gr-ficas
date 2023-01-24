# Proyecto-Graficas
This project was generated with Angular CLI version 15.0.4.

*Requisistos:*

1. Tener instaldo Node.js
-saber la version
```
node --version 
```
-instalar
```
https://nodejs.org/es/download/ 
```

2. Tener instaldo el npm 
-saber la version
```
npm --version 
```
-instalar
```
npm install  
```

3. Tener instaldo angular 
-saber la version
```
ng --version 
```
-instalar
```
npm install -g @angular/cli 
```

4. Se va a usar la librería bootstrap 
```
npm install boostrap jquery @popperjs/core 
```
Y el script que se ocupa en el archivo angular.json.
```
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],

"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/@popperjs/core/dist/umd/popper.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```

**Como usar Chart.js**

> Instalar la librería Chart.js
```
npm install chart.js
```
En el tsconfig.json agregar la siguiente línea
```
"compilerOptions": {
    "resolveJsonModule": true,
    "esModuleInterop": true,
    ...
  }
```

# Development server
Run ng serve for a dev server. Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

