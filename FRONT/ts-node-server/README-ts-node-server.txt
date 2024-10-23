Proyecto: ts-node-server
Este proyecto es un servidor web básico creado con Node.js y TypeScript. Utiliza Express, un framework minimalista para Node.js, para servir un archivo HTML simple. A continuación se detallan los archivos y carpetas que se han creado, así como las librerías y configuraciones que se han utilizado.

Estructura del Proyecto
css
Copiar código
ts-node-server/
├── index.html
├── package.json
├── src/
│   └── server.ts
├── tsconfig.json
└── node_modules/
Archivos y Carpetas
index.html: Este archivo contiene el HTML que se sirve al navegador cuando accedemos al servidor. Es un archivo simple con un título y un mensaje de bienvenida.

Contenido:

html
Copiar código
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple HTML Page</title>
</head>
<body>
  <h1>Hello from Node.js and TypeScript!</h1>
  <p>This is a simple HTML page served from a Node.js server.</p>
</body>
</html>
package.json: Este archivo es el manifiesto de Node.js. Contiene información sobre el proyecto, las dependencias instaladas y los scripts que podemos ejecutar.

Dependencias:
express: Framework para aplicaciones web y APIs.
typescript: Compilador de TypeScript.
ts-node: Herramienta para ejecutar archivos TypeScript sin necesidad de compilarlos.
@types/express: Tipos TypeScript para Express.
Scripts:
json
Copiar código
{
  "scripts": {
    "build": "tsc",
    "start": "ts-node src/server.ts"
  }
}
"build": "tsc":

Ejecuta el comando tsc, que es el compilador de TypeScript. Toma los archivos .ts y los convierte en .js, guardando los resultados en la carpeta dist.
Cuándo se ejecuta: Cuando corres npm run build.
Resultado: Se crea la carpeta dist con los archivos JavaScript compilados.
"start": "ts-node src/server.ts":

Ejecuta el servidor desde el archivo src/server.ts utilizando ts-node. Esto permite ejecutar el código TypeScript directamente sin necesidad de compilarlo antes.
Cuándo se ejecuta: Cuando corres npm start.
Diferencia entre ambos scripts:

build es usado para compilar el código TypeScript a JavaScript, ideal para producción.
start ejecuta directamente el archivo TypeScript en desarrollo usando ts-node.
src/server.ts: Este archivo contiene el código que configura el servidor Express para servir el archivo index.html.

Código:

typescript
Copiar código
import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
tsconfig.json: Configura cómo se compilará el código TypeScript a JavaScript. Algunas configuraciones clave:

"outDir": "./dist": El código compilado se guardará en la carpeta dist.
"target": "ES6": El código se compilará a ECMAScript 6.
"strict": true: Habilita el modo estricto de TypeScript.
node_modules/: Carpeta que contiene todas las dependencias instaladas mediante npm install.

Instrucciones para ejecutar el proyecto
Instala las dependencias ejecutando:

bash
Copiar código
npm install
Para iniciar el servidor:

bash
Copiar código
npm start
Abre el navegador y ve a http://localhost:3000 para ver la página HTML servida.

Para compilar el código TypeScript a JavaScript:

bash
Copiar código
npm run build
Dependencias Utilizadas
express: Framework para crear servidores web y APIs.
typescript: Lenguaje que agrega tipado estático sobre JavaScript.
ts-node: Herramienta para ejecutar archivos TypeScript directamente en Node.js.
@types/express: Tipos TypeScript para Express