# API BOOK

Este repositorio crea una API Node.js acerca de libros usando Express para interactuar con una base de datos MySQL a través de Sequelize.

## Empezando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

## Instalación 🔧

Para comenzar con el proyecto, sigue los siguientes pasos:

**1. Clonar el repositorio:**

```bash
git clone https://github.com/Wilder-Aguilar/apiBook.git
cd apiBook
```

**2. Instalar las dependencias:**

```bash
npm install
```

**3. Realizamos la conexión desde consola:**

```bash
node app.js
```

**4. Verificamos la creación en MySQL Workbench:**

```bash
CREATE DATABASE book_app;
USE book_app;
SHOW TABLES;
```

![image](https://github.com/user-attachments/assets/6480c959-fe7f-4f50-8f32-90deba9ddc2e)

## Testing 🔧

Se ha realizado pruebas de test a cada una de las peticiones CRUD, se ejecuta con lo siguiente:

```bash
npm run test
```

![Captura de pantalla 2024-10-15 174937](https://github.com/user-attachments/assets/a044802e-67ba-41ba-bca3-42d0929f6ca7)

## 💻 Tecnologías empleadas 🛠️

[![JavaScript](https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://developer.mozilla.org/es/docs/Web/JavaScript)    Captura los eventos del usuario, modifica el contenido de la página HTML para mostrar o actualizar datos (Manipulación del DOM); envía solicitudes al servidor para crear, leer, actualizar o eliminar datos y muestra los resultados de las operaciones del servidor en la página.

[![Node.js](https://img.shields.io/badge/Node.js-green?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) [![Express.js](https://img.shields.io/badge/Express.js-4DB33A?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/): Entorno de ejecución y framework web para el desarrollo del backend.

[![SQL](https://img.shields.io/badge/SQL-307DB1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/): Lenguaje de consulta estructurado para la gestión de la base de datos.

[![Sequelize](https://img.shields.io/badge/Sequelize-5272B4?style=for-the-badge&logo=sequelize&logoColor=white)](https://sequelize.org/): ORM (Object-Relational Mapper) para interactuar con la base de datos de forma más intuitiva.

[![Express Validator](https://img.shields.io/badge/Express%20Validator-blue?style=for-the-badge&logo=express&logoColor=white)](https://www.npmjs.com/package/express-validator): Middleware para validar los datos de entrada a los endpoints.

[![Jest](https://img.shields.io/badge/Jest-blue?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/) [![Supertst](https://img.shields.io/badge/Supertst-blue?style=for-the-badge&logo=supertest&logoColor=white)](https://supertest.js.org/): Framework de testing y herramienta para realizar pruebas unitarias y de integración.

[![Postman](https://img.shields.io/badge/Postman-F65E1D?style=for-the-badge&logo=postman&logoColor=white)](https://www.postman.com/): Herramienta para documentar y probar los endpoints de la API.

## 🔮 Mirando al futuro

Todo proyecto requiere de mejoras asi que si estás interesado en contribuir a esta función, te invito a clonar el repositorio y crear una rama para tus cambios. ¡Tu ayuda es muy valorada!

## Autor ✒️

Wilder Aguilar - <https://github.com/Wilder-Aguilar>
