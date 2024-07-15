# Soy Tu Rumi 🏢

_En Soy tu Rumi, nos dedicamos a facilitar la búsqueda de tu compañero de arriendo, creando conexiones significativas dentro de la comunidad universitaria. Somos una plataforma comprometida con brindar soluciones prácticas para estudiantes que buscan un hogar temporal o de largo plazo, así como aquellos en la búsqueda de compañeros de cuarto que compartan sus mismas necesidades y preferencias._

![](https://i.ibb.co/HdH5DmL/soyturumi-Banner.png)

## Comenzando 🚀

### Pre-requisitos 📋

_Softwares que debes tener instalados_

- [NodeJS](https://nodejs.org/en/download/package-manager)
- [MongoDB](https://www.mongodb.com/docs/manual/installation/)
- [Npm](https://docs.npmjs.com/cli/v10/commands/npm-install)

### Instalación 🔧

_Clonar repositorio_

```
$git clone https://github.com/CarlosAGM/soyTuRumi.git
```

_Ingresa a la carpeta del proyecto_

```
$cd soyTuRumi
```

_Instala las depencias back end_

```
$npm i
```

_Ingresa a la carpeta cliente_

```
$cd cliente
```

_Instala las depencias front end_

```
$npm i
```

### Configuración .env 🛠️

_Usando de ejemplo el archivo .env.example crea un archivo al mismo nivel llamado .env y ingresa tus datos_

```
#BackEnd
#Direccion base de datos MongoDB
MONGODB_URI =
#Puerto del BackEnd
PUERTO =
#TOKEN_SECRETO: Se utiliza para la firma y verificación de tokens Ej. "clave secreta"
TOKEN_SECRETO = ""

#Cloudinary API Utilizada para las imagenes https://cloudinary.com/
CLOUD_NAME = ""
API_KEY = ""
API_SECRET = ""
CLOUDINARY_URL =
```

### Levanta el proyecto 🛫

_Levanta la base de datos MongoDB en consola_

```
$mongod
```

_Levanta el backend del proyecto en la carpeta raiz
/soyTuRumi_

```
$npm run dev
```

_Levanta el frontend del proyecto en la carpeta
/soyTuRumi/cliente_

```
$npm run dev
```

## Estructura del proyecto 🛠️

![](https://i.ibb.co/Sdhq09x/Captura-de-pantalla-2024-07-13-020925.png)

## Construido con stack MERN 💻

- [MongoDB](https://www.mongodb.com): Base de datos NoSQL orientada a documentos, flexible y escalable, que almacena datos en formato JSON.

- [Express](https://expressjs.com/es/): Framework minimalista para Node.js que facilita la creación de aplicaciones web y APIs mediante el manejo de rutas y middleware.

- [React](https://es.react.dev): Biblioteca de JavaScript para construir interfaces de usuario mediante componentes reutilizables y gestión eficiente del estado.

- [Node.js](https://nodejs.org/en): Entorno de ejecución de JavaScript del lado del servidor, que permite crear aplicaciones escalables y de alto rendimiento con E/S no bloqueante.

- [Vite](https://vitejs.dev/): Vite es una herramienta de construcción rápida y eficiente para proyectos de JavaScript, conocida por su inicio instantáneo y su capacidad para manejar módulos ES nativos de manera eficaz en el desarrollo.

### Dependencias FrontEnd 💻

- **Tailwindcss:** Framework de CSS utility-first que facilita la creación de interfaces de usuario personalizables y responsivas mediante clases predefinidas.

- **Postcss:** Herramienta para transformar estilos CSS con JavaScript, permitiendo la integración de plugins para mejorar el flujo de trabajo de desarrollo.

- **Autoprefixer:** Plugin de PostCSS que agrega prefijos de proveedores automáticamente a reglas CSS para garantizar la compatibilidad con varios navegadores.

- **React-router-dom:** Biblioteca para manejar enrutamiento de aplicaciones React en el navegador, facilitando la navegación entre componentes.

- **React-hook-form:** Biblioteca para gestionar formularios en aplicaciones React mediante hooks, optimizada para un rendimiento y experiencia de usuario mejorados.

- **Js-cookie:** Biblioteca para la gestión de cookies en JavaScript de manera sencilla y eficiente, facilitando la creación, lectura y eliminación de cookies.

### Dependencias BackEnd 💻

- **Mongoose:** ODM (Object-Document Mapper) para MongoDB en Node.js, facilita la interacción con la base de datos MongoDB utilizando esquemas y modelos.

- **Morgan:** Middleware para registrar solicitudes HTTP en Node.js, útil para la creación de registros de acceso.

- **Express:** Framework web minimalista para Node.js, facilita la creación de aplicaciones web y APIs mediante rutas y middleware.

- **Express-fileupload:** Middleware para Express que facilita la carga de archivos en aplicaciones web.

- **Nodemon:** Utilidad para Node.js que reinicia automáticamente la aplicación cuando se detectan cambios en los archivos de origen, ideal para el desarrollo.

- **Jsonwebtoken:** Biblioteca para la creación y verificación de tokens JWT (JSON Web Tokens), utilizados para la autenticación en aplicaciones web.

- **Cookie-parser:** Middleware para Express que facilita el análisis de cookies en las solicitudes HTTP.

- **Dotenv:** Biblioteca que carga variables de entorno desde un archivo .env en aplicaciones Node.js, útil para la configuración.

- **Fs-extra:** Extensión de la biblioteca fs estándar de Node.js que proporciona métodos adicionales para trabajar con el sistema de archivos.

- **Http-errors:** Biblioteca para crear errores HTTP de manera fácil y consistente en aplicaciones Express.

- **Cloudinary:** Servicio en la nube para el almacenamiento y la manipulación de imágenes y videos, integrable con aplicaciones web.

- **Zod:** Biblioteca para la validación de esquemas de datos en JavaScript/TypeScript de manera intuitiva y segura.

- **Cors:** Middleware para Express que habilita el intercambio de recursos entre diferentes dominios, útil para evitar problemas de seguridad en las solicitudes AJAX.

## Autores ✒️

- **Carlos Agüero** - _Proyecto Inicial_ - [github](https://github.com/CarlosAGM) - [linkedin](www.linkedin.com/in/carlos-agüero-marquizani-620618243)
- **Maximiliano Valdebenito** - _Proyecto Inicial_ - [github](https://github.com/Zycky/)

### Fin
