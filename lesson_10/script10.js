// Вапинты написания функции
// Массивы
// Алгоритмы


// c let function в нчале функция и потом выводим результат
let sum = function (a, b) {
    console.log("run");
    let c = a + b;
    return c;
};

let result = sum(2, 5);
console.log(result);

// coldback это функция , которая передается в другую функцию в вде параметров

function ask(condition, yes, no) {
    if (condition) {
        yes()
    } else {
        no()
    }
}

function showOK(){
    console.log("OK!")
}

function showERROR(){
    console.log("ERROR!")
}

ask(5 > 2, showOK, showERROR);
ask(5 < 2, showOK, showERROR);

ask(10 > 2, function () {},function () {
    console.log("!!!!")
} );

let myFunc = () => {
    console.log("My func!")
};

myFunc();

ask(10 > 20, () => {}, () => {
    console.log("!!!!")
}); // function () {} = () => {}

// немедленная выполняемая функция

(() => {
    console.log("ILF")
})();

(function show() {
    console.log("ERORR!")
})();

let fuct (n) => {
    if (n === 0) {
        return 1
    }

    return n * fuct(n - 1)
}; // рекурсивные функция

let res = fuct(5):
console.log(res);