//  Массивы - это специальный объект, где его ключами являются числа
// значение может быть любой объект
// подряд выделяемая память в оперативной 

myArt = [5, 4, 3, 2, 1, 0];

// порядковый номер от 0 и так далее 

let fruits = ["apple" , "orange", "pineapple"];

console.log(fruits[1]);

console.log(myArt[0]);
fruits[1] = "apple";

console.log(fruits[1]);
console.log(fruits);

// lens длинна массива

console.log(myArt.length);

let myArt1 = [];
console.log(myArt1.length);

const myArt2 = []; // массивы принято писать в const

// методы массивов
console.log(myArt2);

myArt2.push("Женя");
console.log(myArt2);

myArt2.push("Кирилл");
console.log(myArt2);// метод push добавляет значение в конец массива

myArt2.unshift("Илья");
console.log(myArt2); // метод push добавляет значение в начало массива , делает его нулевым 0

myArt2.unshift("Максим");
console.log(myArt2); 

myArt2.pop();
console.log(myArt2); // удаляет из массива последний элемент

myArt2.shift();
console.log(myArt2); // удаляет из массива первый элемент
// возвращают тот элемент, который убрал
let name = myArt2.pop();
console.log(name);

name = myArt2.shift();
console.log(name);

console.log(myArt2);

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
};

fruits[10] = "apple"
console.log(fruits.length); // номер последнего элемента массива + 1

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
};

for (let value of fruits) {
    console.log(value)
};

// многомерный массив

let matrix = [
    [1 , 2, 3],
    [4 , 5, 6],
    [7, 8, 9],
];

console.log (matrix[1][1]);

for (let subArr of matrix){
    for (let val of subArr){
        console.log(val)
    }
};

// домашнее задание