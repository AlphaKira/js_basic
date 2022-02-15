let a = 14;

let access = a > 18 ? "Допущен": "Не допущен";
console.log(access);

// continue перепригывает шаг итерации
// (обозначает , что это функция) названия параметра 
// {то что будет функция делать}
function funcName (){
    console.log("My first function")
};

funcName();
funcName();
funcName();
funcName();
funcName();

function great(name){
    console.log(`Hi ${name}!`);
};

great("Ilya");
let kirill = "Kirill";

great("Kirill");

function evgeniy(){
    return "Evgeniy"
};

let c = evgeniy();
console.log(c);

great(evgeniy());

great();

let x = great("A");
console.log(x);

function showMessage(messege){
    let now = new Date();
    console.log(`${now.toISOString()}: ${messege}`)
}; // локальный переменные , их за пределами функции использовать нельзя
// её не существует вне функции


showMessage(evgeniy());

showMessage("My message!");

let y ="ЯН";

function newGreat (){
    console.log(`Hi ${y}!`);
};

newGreat();
// pow возведение в степень
function pow (x, y) {
    return x**y; // возводиться в степень **
}; // значение поподает во внешний код

console.log(pow(2, 10));