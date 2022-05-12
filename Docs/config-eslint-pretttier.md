# Configurar Eslint y Prettier

A continuación se enlistan los procedimientos para configurar Eslint y prettier en un proyecto node.

## Instalar Eslint

~~~bash
npm i -D eslint
~~~

Se ejecuta una configuracion inicial

~~~bash
npx eslint --init
~~~

## Se instala Prettier

~~~bash
npm i -D prettier eslint-config-prettier
~~~

## Se agrega la cofiguración necesaria a eslintrc

- Un objeto para las configuraciones de las reglas

~~~js
const RULES = {
  OFF: 'off',
  ERROR: 'error',
  WARN: 'warn',
};
~~~

- Se agregan los plugins, acontinuacion los usados para react

~~~js
plugins: ['react', 'jsx-a11y', 'react-hooks', 'prettier']
~~~

- Se agregan las configuraciones adicionales

~~~js
extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
~~~

- Un ejemplo de reglas personalizadas

~~~js
rules: {
    'prettier/prettier': RULES.ERROR,
    'arrow-body-style': RULES.OFF,
    'react/function-component-definition': [
      RULES.ERROR,
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
  },
~~~

## Configuración de prettier

~~~json
{
    "printWidth": 80,
    "trailingComma": "es5",
    "tabWidth": 2,
    "endOfLine": "lf",
    "semi": true,
    "singleQuote": true
}
~~~

## Finalmente se instala huskie

~~~bash
npx mrm lint-staged
~~~
