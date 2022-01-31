/*
5 * 2 ("5" и "2" - операнды, "*" - оператор)

Базовые операторы бывают унарные или бинарные
унарные - который примеряеться к одному операнду
бинарный - который примеряеться к двум операнду
*/

let x = 1;

x = -x; // "-" унарный оператор
console.log(x); // логировать - отобразить значения в консоль

let y = 5;
let z = y - x; // "-" - , бинарный оператор 
console.log(z);

/*
МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ
+ - сложение
- - вычетание 
* - умножение
/ - деление
% - взятие остатка ( 5 % 2 === 1 )
** - возведение в степень 
*/

console.log(5%2);
console.log(`8 % 3 = ${8%3}`); // шаблонная строка , вопрос

console.log(2**40);
console.log(48**(1/3));

let s = "Hello" + " " + "world";
console.log(s);

console.log("1" + 2);
console.log(1 + "2");
console.log(2 + 2 + "1");

console.log(6 - "2");
console.log("6"/"2");

console.log(6 - "а");

let x1 = 1;
console.log(+x1);
let x2 = 1;
console.log(-x2);

console.log(true);
console.log(+true); // + тут преобразуют типы данных в число
console.log(+false);
console.log(+false);
console.log(+"");
console.log(+"вавав");

console.log(1 + 2 * 2);
console.log((1 + 2) * 2);

let x3;
x3 = 3 + (3 + "3");
console.log(x3);

let a, b, c;
a = b = c = 2 + 2;
console.log(a);
console.log(b);
console.log(c);

let n = 2;
n += 5;

console.log(n);

n *= 15;
console.log(n);

n *= 2 + 3;
console.log(n);

n++
console.log(n); // инкримент добавляет + 1

n--
console.log(n); // дискримент вычетает + 1