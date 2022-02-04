let age = 16;
let access;

// переменная в которую присваиваем результат = условия ?
// значение возвращаемое, если условие вернет true :
// значение возвращаемое, если условие вернет false

let a1 = access ?? "not inicialized";
access = age > 18 ? "full": "child" // тернарное выражение, если нам нужно вернуть какой-то значение по условию
let a2 = access ?? "not inicialized";

// присваивает значение access , если оно не null или андевайд

console.log(access);
console.log(a1);
console.log(a2);

// если нам нужно выполнить значение по условию if 

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
// && - оператор "AND" логическое "и", возвращает true, если оба операнда true 
// если один из них false, тогда false

let andResult = true && false;
console.log(andResult);

let andResult2 = {} && "a";
console.log(andResult2);
/* 
ТАБЛИЦА ИСТИННОСТИ ДЛЯ &&, выводит первое встречиваешися false 
a   | b    | a && b
----+---+------
true| true | true
----+---+------
true| false | false
----+---+------
false| true | false
----+---+------
false| false | false
----+---+------
*/

let andResult3 = 5 < 10 && 2 > 1;
console.log(andResult3);

// белая это строка , желтая это boolean или число

// || - оператор "OR" логическое "ИЛИ"

let orResult = false || true;
console.log(orResult);

let orResult1 = 0 || "ad";
console.log(orResult1);

let orResult2 = "" || 0; // если все false , тогда будет последние значение 
console.log(orResult2);

/* 
ТАБЛИЦА ИСТИННОСТИ ДЛЯ || , выводит последние значение true  
a   | b    | a || b
----+---+------
true| true | true
----+---+------
true| false | true
----+---+------
false| true | true
----+---+------
false| false | false
----+---+------
*/

// ! - оператор "NOT" логическое "НЕ", приобразования идет boolean типу, отрицание всегда кboolean типу 
let notResult = !true
console.log(notResult);

let notResult1 = !0
console.log(notResult1);

let notResult2 = !"a"
console.log(notResult2);

let notResult3 = !!0
console.log(notResult3);

/* 
ТАБЛИЦА ИСТИННОСТИ ДЛЯ ||
a   | !a    |
----+---+------
true| false | 
----+---+------
false| true | 
----+---+------

*/

console.log(null || 4 || undefined);
console.log(1 || null || 2);
console.log(1 || null || 2);