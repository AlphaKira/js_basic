console.log(typeof null); // переходит в другой тип данных на объект
// Операторы сравнения всегда бинарные , потому что нам нужно два сравнения, чтобы нам их сровнить
console.log(5 > 2);

let a = 5 > 2;
console.log(a); 

console.log(0 >= 0);
console.log(0 <= 0);

console.log(0 != 0); // ! отрицание 

console.log(0 == 0); // = присвоить , == равно  
// не точное сравнение , так как разные типы данных
console.log(0 === "0"); // строгое равно   
console.log(0 !== "1"); // не строгое равно 
console.log(0 === 0); // строгое равно   
console.log(0 !== 1); // не строгое равно 

console.log("q" > "a");
console.log("aq" > "aa");
console.log("aqaaa" > "aa");
console.log("aq" > "aaaaaaa");

console.log("aa" > "aaaaaaa");

console.log(null == undefined ); // нигде ничего нет
console.log(null === undefined ); // false так ка это разные типаы данных

console.log(null > 0 ); 
console.log(null == 0 ); 
console.log(null >= 0 ); // исключение 
