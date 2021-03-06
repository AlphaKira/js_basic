/*
Цикл While (цикл с предусловием)
пока это не произойдет
while (условия) {
    // код
    // правильно называть тело цикла
}
// в начале условие, если true , тогда выполняеться итерация
Цикл это повторяющиеся действия / повторение тела цикла называется итерация
*/

let i = 0;
while (i < 5){
    console.log(i);
    i++; 
}

while (i) {
    console.log(i);
    i--;
}

/* 
Цикл do...while (цикл с постусловием)
// в начале итерация , потом условие
do {
    // тело цикла - код
} while (условие)
*/
// постусловием итерация выполнит, и потом условия. Первая итерация сразу выполниться

do {
    console.log(i);
    i++;
} while(i < 10);

/* 
цикл for(цикл с заданным количеством повторений)

for (начало или инициализация; условие; шаг){
    // тело цикла
} после условия выполняеится итерация , шаг выполняется последний , после того как условие даёт false, тогда выполняеться следующая строчка
*/ // после фигурных скобок выполнится следующия строчка, если false
// шаг изменение значение итератора
// итерация это одно повторение тело цикла
for (let j = 0; j < 10; j++){
    console.log(j);
};

for (let j = 0; j < 10; j+= 2){
    console.log(j);
}

/* 
Выполнить *начало*
    (Если *условие* == true, Выполнить"тело", Выплнить "шаг")
    (Если *условие* == true, Выполнить"тело", Выплнить "шаг")
    (Если *условие* == true, Выполнить"тело", Выплнить "шаг")
...
*/

for (let j = -10; j < 10; j+= 2){
    console.log(j);
    if(!j){
        break;
    }
}

for (let j = -10; j < 10; j++){
    if(j % 2 === 0){
        continue;
    }
    console.log(j);
};

out: for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){ 
        console.log(i*j);
        if (i*j === 4) {
            break out;
        }
    }
}

console.log("END");