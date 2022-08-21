# Configurar Proyecto MongoDB

[Video 1](https://makeitreal.s3.amazonaws.com/videos/84689151964/2022-05-26/I49u7AQSl.mp4)

[Video 2](https://makeitreal.s3.amazonaws.com/videos/84689151964/2022-05-27/mzK10Tuny.mp4)

[Video 3](https://makeitreal.s3.amazonaws.com/videos/84689151964/2022-05-31/HRBE5JENQ.mp4)

## Comando para Mongo

```bash
sudo systemctl start mongod.service
sudo systemctl enable mongod.service
systemctl status mongod.service

sudo systemctl stop mongod
sudo systemctl restart mongod

mongo -version
```

## Proceso para crear un servidor

1. Inicializar un proyecto node

```node
npm init -y
```

2. Instalar las dependencias necesarias
   - express
   - mongoose
   - cors
   - nodemon

```
npm i express mongoose cors nodemon
```

3. Crear y configurar archivo `server.js` a la altura del package.json

```js
const express = require("express");
const cors = require("cors");

const port = 8080;
const app = express();

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log("App running OK");
});
```
