## Purchases API para gestionar productos y compras

## Acerca del código

La applicación está hecha desde cero. El stack tecnológico es full Javascript con [NodeJS](https://nodejs.org).

El proyecto utiliza las siguientes dependencias(librerias) fundamentales para la solución:

- [**N**ode.js](https://nodejs.org): runtime environment
- [**E**xpress.js](http://expressjs.com): backend framework
- [**M**ongoose.js](https://mongoosejs.com): library for mongo

### Prerequisitos

1. Instalar [Node.js](https://nodejs.org)

### Intalando dependencias (librerias)

Primero, ingresar a la carpeta base del directorio del proyecto:

```sh
$ cd purchases-api
```

Segundo, instalar dependencias

```sh
$ npm install
```

### Configuración de propiedades

En la base del directorio del proyecto se puede encontrar el archivo `.env` con propiedades de entorno de la aplicación.

En este archivo puede configurar:

- Url de la base de datos
- Url de la base de datos para realizar pruebas
- Puerto de la aplicación

###### PORT

Cambiar valor al puerto deseado, por defecto es el puerto 9000

###### MONGODB_URI

Colocar la conexion en formato string a su base de datos mongo

###### MONGODB_URI_TEST

Colocar la conexion en formato string a su base de datos mongo para realizar las pruebas unitarias

### Documentación Apis

La documentacion de todas las apis se puede encontrar accediendo a http://localhost:{PORT}/api-doc. Para generar la documentación puede ejecutar el siguiente comando de la siguiente manera

```sh
npm run swagger-gen
```

### Test unitarios

Para realizar los test unitarios de los endpoints se eligieron las librerias Jest y supertest. Para correr los test puede ejecutar el siguiente comando de la siguiente manera


```sh
npm run test
```
