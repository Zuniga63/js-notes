# Crear un Servidor express usando Node y TypeScript

1. Se inicializa el repositorio npm con el comando:`npm init -y`
2. Se instala typescript `npm i -D typescript`
3. Se agrega el comando tsc para compilar los archivos en packages.json `"tsc": "tsc"`
4. Se inicializa la configuración de typescrip `npm run tsc -- --init` **Nota: -- es para saltar el comando npm run**
5. Se activan los siguientes paramentros:
```JSON
{
  "compilerOptions": {
    "target": "es2016", 
    "module": "commonjs",
    "outDir": "./build", 
    "strict": true,
    "noUnusedLocals": true, 
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,  
    "esModuleInterop": true, 
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "sourceMap": true,
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
```
6. Se instalan las dependencias el server `npm i express cors morgan mongoose dotenv  -E`
7. Se instalan los typos de la dependencias `npm i @types/express @types/morgan @types/cors -D -E`
8. Se instala `npm i ts-node-dev -D`
9. Se agrega el comando `"dev": "ts-node-dev src/index.ts"` para escuchar los cambios en el codigo
10. Se crea la configuración basica en el server
```ts
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

// Initial config
dotenv.config();
const port: string | undefined = process.env.APP_PORT;
const host: string | undefined = process.env.APP_HOST;

// add express instance
const app = express();

// add midlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// start server
app.listen(port, (): void => {
  const url = `${host}:${port}`;
  console.log(`Server is running in: ${url}`);
});
```
