# CURSO DE TYPESCRIPT

## Declaración de tipos

Se puede asociar un tipo a una variable de manera explícitas o mediante la inferecnia de tipos implicita.

```ts
let x: number; //* Explicitly declares x as a number type
let y = 1; //* Implicitly declares y as a number type
let z; //* Declares z without initializing it
```

### Tipos y subtipos

Todos los tipos en typscript son subtipos de un unico tipo principal denominado typo any.

### **Tipos primitivos**

Los tipos primitivos son: **boolean**, **number**, **string**, **void**, **undefined**, **null**, junto con enumeración **enum**.

#### **Tipos de objeto y parmetros de tipo**

Son todos los tipos de clase, de interfaz, de matriz y literales.

### Tipo enumeración

Las enumeraciones son una forma sencilla de trabajar con conjuntos de constantes relacionadas.

```ts
enum ContractStatus {
  Permanent,
  Temp,
  Apprentice,
}
```

De forma predeterminada los valores enum comienzan con el valor 0
pero se puede establecer su valor inicial.

```ts
enum ContractStatus {
  Permanent = 1,
  Temp,
  Apprentice,
}
```

### Tipo any y unknown

El tipo any puede representar cualquier valor de javascript sin restricciones. El tipo unknown es similar al tipo any en el aspecto de que cualquier valor se puede asignar. Pero no se puede llamar a las propiedades de un tipo unknown; tampoco se puede llamar ni construir

### Asercion de tipos

La aserción de tipo sirve para indicarle a Typescript que una variable va a aser tratada de forma diferente. Sirve para indicarle al compilador "confia en mi, se lo que estoy haciendo"

**Sintaxis**

```ts
(randomValue as string).toUpperCase();

-o - (<string>randomValue).toUpperCase();
```

```ts
let randomValue: unknown = 10;

randomValue = true;
randomValue = "Mateo";

if (typeof randomValue === "string") {
  console.log((randomValue as string).toUpperCase()); //* Returns MATEO to the console.
} else {
  console.log("Error - A string was expected here."); //* Returns an error message.
}
```

### Tipos de union

Describe un valor que puede ser uno entre varios tipos.

```ts
let multiType: number | boolean;
multiType = 20; //* Valid
multiType = true; //* Valid
multiType = "twenty"; //* Invalid
```

### Tipos de Intersección

Un tipo de intersección combina dos o mas tipos para crear uno que tiene todas las propiedades de los tipos existentes.

Se usan con mayor frecuecnia con las interfaces.

```ts
interface Employee {
  employeeID: number;
  age: number;
}
interface Manager {
  stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
  employeeID: 12345,
  age: 34,
  stockPlan: true,
};
```

### Tipos literales

Es un subtipo mas concreto de un tipo colectivo.

```ts
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
myResult = "failure"; //* Invalid

type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1; //* Valid
diceRoll = 2; //* Valid
diceRoll = 7; //* Invalid
```

### Tipos de colección

#### Matrices

```ts
let list: number[] = [1, 2, 3];
```

#### Tuplas

Son matrices que tiene valores de tipos mixtos y usa la sintaxis `variableName: [type, type, ...]`

```ts
let person1: [string, number] = ["Marcia", 35]; // ok
let person1: [string, number] = ["Marcia", 35, true]; // error

// Los elementos de tupla son fijos, y el orden de los valores es importante.
```

## Implementación de interfaces

Se pude usar interfaces para describir un objeto.

```ts
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName: "Emil",
  lastName: "Andersson",
  fullName(): string {
    return this.firstName + " " + this.lastName;
  },
};

employee.firstName = 10; //* Error - Type 'number' is not assignable to type 'string'
```

### Extensión de una interfaz

```ts
interface Sundae extends IceCream {
  sauce: "chocolate" | "caramel" | "strawberry";
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: boolean;
}
```

### Creación de tipós indexables

```ts
interface IceCreamArray {
  [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ["chocolate", "vanilla", "strawberry"];
let myStr: string = myIceCream[0];
console.log(myStr);
```

## Funciones con Typescript

### Funciones con nombre

```ts
function addNumbers(x: number, y: number): number {
  return x + y;
}
addNumbers(1, 2);
```

### Funciones anonimas

```ts
let addNumbers = function (x: number, y: number): number {
  return x + y;
};
addNumbers(1, 2);
```

### Funciones flecha

```ts
// Anonymous function
let addNumbers1 = function (x: number, y: number): number {
  return x + y;
};

// Arrow function
let addNumbers2 = (x: number, y: number): number => x + y;
addNumbers(1, 2);
```

### Parametros REST

```ts
let addAllNumbers = (
  firstNumber: number,
  ...restOfNumbers: number[]
): number => {
  let total: number = firstNumber;
  for (let counter = 0; counter < restOfNumbers.length; counter++) {
    if (isNaN(restOfNumbers[counter])) {
      continue;
    }
    total += Number(restOfNumbers[counter]);
  }
  return total;
};
```

### Parametros de objeto deconstruido

```ts
interface Message {
  text: string;
  sender: string;
}

function displayMessage({ text, sender }: Message) {
  console.log(`Message from ${sender}: ${text}`);
}

displayMessage({ sender: "Christopher", text: "hello, world" });
```
