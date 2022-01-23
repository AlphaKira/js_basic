let message; // объявить переменную с названием mesage

message = 'Hello'; // присвоить в переменую message строку Hello

alert(message); // вызвать функцию alert и передать ей параметр переменную message

let newMessage = 'New MESSAGE!'; // создали переменную и проиниализировали её значение

alert(newMessage);

let user = 'John', age = 25; // объявляем несколько переменных (ЭТО ПЛОХО)

let newUser = 'Ilya'; // Это хорошее объявление 
let newAge = 30;

newMessage = 'Hello';
newMessage = 'World!';

alert(newMessage);

let hello = newMessage;

alert(hello);

// let hello
/*
Правило наименования переменных
1 Название переменной состоит из символов алфавита , цифр, $ и _
2 Название должно начинаться с символа названия алфавита, $ или _ ( нельзя начинать название с цифры)
3 Регистр имеет значения (message и MESSAGE - разные переменные)
*/

var x = 2; // объявление переменной ( лучше не использовать )

const LOCALHOST = '127.0.0.1';

// LOCALHOST = '127.0.0.2'; // Вызовет ошибку

const BACKGROUND_COLOR = '#FFF';