let age = prompt("Введите Ваш возраст");

if (age >= 18) {
    alert("Вы допущены!");
}

if (true) {
    alert("true");
}

if (false) {
    alert("false");
}

if (age >= 18) {
    alert("Вы допущены!");
} else {
    alert("Вы не допущены!");
}

if (1) {
    alert("One");
} else {
    alert("Zero!");
}

if (0) {
    alert("One");
} else {
    alert("Zero!");
}

if (age == 18) {
    alert("С совершеннолетием!");
} else if (age > 18) {
    alert("Вы допущен!");
} else {
    alert("Вы не допущены!");
} // Вариантов выбора больше , чем два 
// в конце писать else не обязательно , если нам нужно , что два значения не совпадают
// условия проверяется по очереди 

if ("0") {
    alert("One");
} else {
    alert("Zero!");
}

if (" ") {
    alert("One");
} else {
    alert("Zero!");
}
// это не пуская строка тут пробел 
// пуская строка это false "" пример

// результат сравнения это boolean