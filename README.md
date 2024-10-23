# MonkApp

├── BACK/                       #   Carpeta del back-end (API con Express)
│   │                           
│   ├── public/                 # ** Build del back, se genera la carpeta al ejecutar tsconfig.json. Archivos públicos que recoge Vercel (HTML y api).
│   │   ├── index.html          #   Página HTML para la interfaz
│   │   └── server.js           #   Archivo compilado del servidor Express
│   │
│   ├── src/                    # ** Aquí está todo el contenido. Esta es la carpeta que se compila, se genera la build y la mete en la carpeta BACK/public
│   │   ├── server.ts           #   Archivo principal del servidor Express
│   │   │
│   │   ├── routes/             #   Rutas de la API
│   │   │   ├── routes.ts       #   Define las rutas de la API
│   │   │   └── ...             
│   │   │
│   │   ├── public/             # ** Aquí meto los archivos estáticos que se pegan directamente en la carpeta public de BACK
│   │   │   └── index.html      # ** HTML que edito directamente
│   │   │
│   │   ├── controllers/        #   Controladores de la lógica de negocio
│   │   │   ├── productController.ts
│   │   │   └── ...       
│   │   │      
│   │   └── models/             #   Modelos de datos (por ejemplo, esquemas de MongoDB)
│   │       ├── productModel.ts
│   │       └── ...       
│   │        
│   ├── tsconfig.json           #  ** Al hacer la build ejecuta tsc que ejecuta a la vez este archivo. Es la configuración de TypeScript para el servidor
│   │                                         (tsconfig.json => BACK/public)
│   │ 
│   ├── package.json            #  ** listado de librerías con sus versiones y definición de build y dev (package.json - build - tsc => tsconfig.json)
│   │                                        (package.json - build - tsc y copiar src/public a BACK/public => tsconfig.json => BACK/public)
│   │                                        (package.json - dev - nodemon src/server.ts => Ejecuta el servidor en local)
│   │ 
│   ├── node_modules/           #  ** Dependencias de NPM para el servidor (Express, ts-node)
│   │
│   └── vercel.json             #  ** Redirige todas las solicitudes al servidor Express que está configurado en public/server.js
│                               #  ** Ejecuta la build.   
|                               #           (vercel.json => package.json - build - tsc => tsconfig.json)
|                               #  ** Si no existiera este archivo se supone Vercel tomaría directamente package.json - build
|
|
|
|
|
├── FRONT/                      #    Carpeta del front-end (React con Vite)
│   ├── dist/                   #    Archivos compilados de Vite para producción
│   │   ├── index.html
│   │   └── assets/
│   │       ├── index-xxxxx.js  #   Bundle JavaScript de la aplicación
│   │       ├── index-xxxxx.css #   CSS optimizado
│   │       └── ...             
│   ├── public/                 #   Archivos públicos
│   │   ├── vite.svg
│   │   └── ...                
│   ├── src/                    #   Código fuente del front-end
│   │   ├── main.tsx            #   Punto de entrada de la aplicación React
│   │   ├── App.tsx             #   Componente principal de la aplicación
│   │   ├── assets/             #   Imágenes y recursos
│   │   └── ...               
│   ├── vite.config.ts          #   Configuración de Vite
│   ├── tsconfig.json           #   Configuración de TypeScript para el front-end
│   ├── package.json            #   Dependencias y scripts del front-end
│   └── node_modules/           #   Dependencias de NPM para el front-end (React, Vite)
└── README.md                   #   Explicación del proyecto (este archivo)


1. Despliegue del Back-End (API con Express)
Cómo Trata Vercel una Aplicación de Back-End
Tipo de aplicación: Vercel puede manejar servidores Node.js directamente. Cuando se detecta un archivo como server.js en un repositorio, Vercel lo despliega como una API serverless o como un servidor Node.js tradicional, dependiendo de la configuración.
API Serverless vs. Servidor Completo:
Si Vercel encuentra una configuración que hace uso de funciones serverless (archivos dentro de api), los despliega como endpoints independientes.
En el caso de BACK/, donde el archivo server.js maneja múltiples rutas, Vercel lo ejecutará como un servidor Node.js, en lugar de dividirlo en funciones serverless.
Pasos para Desplegar el Back-End
Crear un proyecto en Vercel para el back-end:

Inicia sesión en Vercel y selecciona la opción para importar un nuevo proyecto desde GitHub.
Selecciona el repositorio de MonkApp y, durante el proceso de configuración, indica que el directorio de origen es BACK.
Configuración de la build:

Configura el comando de build como npm run build (compila los archivos TypeScript en public/server.js o dist/server.js).

Asegúrate de que la configuración de vercel.json esté alineada para redirigir las solicitudes al archivo compilado de server.js:

---------------------------------------------------------------------------------------------------------

json
{
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/public/server.js"
    }
  ]
}

---------------------------------------------------------------------------------------------------------
Esto redirige todas las solicitudes a server.js, que manejará las rutas de la API y cualquier archivo estático necesario.

Desplegar la aplicación:

Vercel construirá el servidor, ejecutará server.js y lo servirá como un back-end accesible desde una URL específica de Vercel (ej. https://your-backend.vercel.app).
Conectar Front-End y Back-End:

Una vez desplegados ambos proyectos, asegúrate de que el front-end use la URL del back-end para las solicitudes API. Esto se puede hacer a través de variables de entorno, configurando el endpoint del API en React:

---------------------------------------------------------------------------------------------------------

javascript
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://your-backend.vercel.app/api";

---------------------------------------------------------------------------------------------------------


2. Despliegue del Front-End (React con Vite)
Cómo Trata Vercel una Aplicación de Front-End
Tipo de aplicación: Vercel detecta automáticamente aplicaciones front-end que utilizan frameworks como React, Vite, Next.js, etc. En este caso, Vercel reconocerá que el proyecto en FRONT/ es una aplicación de tipo React con Vite.
Build Command: Vercel ejecutará automáticamente el comando npm run build para generar una versión optimizada de la aplicación dentro de la carpeta dist.
Output Directory: La carpeta dist generada durante la compilación se usa para servir los archivos estáticos (index.html, JavaScript, CSS, imágenes, etc.). Vercel toma esta carpeta y la convierte en la versión publicada de tu sitio.
Pasos para Desplegar el Front-End
Crear un proyecto en Vercel para el front-end:

Inicia sesión en Vercel y selecciona la opción para importar un proyecto desde GitHub.
Selecciona el repositorio de MonkApp y, durante el proceso de configuración, indica que el directorio de origen es FRONT.
Configuración de la build:

Durante el despliegue, asegúrate de que el comando de build sea npm run build y que el output directory esté configurado como dist.
Esto es automático en muchos casos, ya que Vercel detecta la configuración de Vite. Si no, puedes configurarlo manualmente en los "Project Settings".
Desplegar la aplicación:

Vercel ejecutará la compilación de la aplicación de React y la publicará, haciendo que el front-end esté accesible en la URL proporcionada por Vercel (ej. https://your-app.vercel.app).
Enlaces y entorno:

Si tu aplicación de React necesita acceder a una API (como la del back-end en BACK/), asegúrate de definir variables de entorno en Vercel que apunten a la URL del back-end.

3. Aspectos Importantes para el Despliegue de Ambos

Manejo de Variables de Entorno:

Puedes configurar variables de entorno específicas para cada proyecto (FRONT y BACK) desde el panel de Vercel. Esto es útil si necesitas que el front-end conozca la URL del back-end y viceversa.
En el panel de Vercel, ve a la configuración del proyecto y añade las variables bajo la sección "Environment Variables".

Dominio Personalizado:

Si tienes un dominio personalizado, puedes configurarlo en Vercel para que tanto el front-end como el back-end estén bajo subdominios como api.yourdomain.com (para el back-end) y yourdomain.com (para el front-end).

Despliegue Independiente:

Aunque ambos proyectos (FRONT y BACK) viven en el mismo repositorio, se manejan como proyectos independientes en Vercel. Esto te permite desplegar cambios en el front-end sin afectar al back-end y viceversa.