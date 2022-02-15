let message = "Hello";
message = 123;

alert(message)

// ТИПЫ ДАННЫХ 

// Number число максимум +- (2 в 53 степени минус - 1)
let n = 123; // целые число
n = 1.23; // Дробные число
n = Infinity // бесконечность
n = -Infinity // минус бесконечность
n = NaN // not a number , ошибка, когда нет число 
// валидный равно правильный

alert("строка"/2);

// BigInt большое целое число
const bigInt = 333333333333333333n;

// String - строка 
let str = "Hello"; // в двойных кавычках можно использовать ,только, одинарные
let str1 = "Hello"; // в одинарных кавычках можно использовать ,только, двойные
let str2 = `hello`;

// все ковычки обозначают строки

alert(`${str} World!`) // шаблоная строка позволяет встраивает значение в шаблон 
alert(`2 + 2 = ${2+2}`) // шаблоная строка позволяет встраивает значение в шаблон 

// Boolean тип данных (true и false) правда и ложь
let fieldChecked = true;
let isGreater = 4 > 1;
alert(isGreater) 

// null - пустота 
let age = null

// undefined - значение не определено
let x;
alert(x === undefined); // значит, что в x никакое значение не записывалось 

// Object 
let obj = {
    name: "Ilya",
    age: 30,
    isVerify: true,
    account: {
        login: "login",
        password: password,
    },
    run: function() {
        alert("RUN!");
    },
}

// Оператор для опредления типа данных - typeof

alert(`typeof undefined = ${typeof undefined}`)
alert(`typeof 0 = ${typeof 0}`)
alert(`typeof NaN = ${typeof NaN}`)
alert(`typeof 10n = ${typeof 10n}`)
alert(`typeof true = ${typeof true}`)
alert(`typeof "text" = ${typeof "text"}`)
alert(`typeof Math = ${typeof Math}`)
alert(`typeof null = ${typeof null}`)
alert(`typeof alert = ${typeof alert}`)
alert(`typeof x = ${typeof x}`)
