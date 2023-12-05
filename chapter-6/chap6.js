
// Practice Exercise 6.1
function add(a, b) {
    return a + b;
}
const val1 = 25;
const val2 = 40;
console.log(add(val1, val2));
console.log(add(10, 50));



// Practice Exercise 6.2
const adj = ["wonderful", "angry", "bad", "happy", "sad",];

function myfunc() {
    const question = prompt("What is your Name?");
    const nameAdj = Math.floor(Math.random() * adj.length);
    console.log(adj[nameAdj] + "" + question)
}
myfunc();

// Practice Exercise 6.3
const value1 = 20;
const value2 = 15;
let operate = "-";

function cal(a, b, op) {
    if (op === "-") {
        console.log(a - b);
    } else {
        console.log(a + b);
    }
}
cal(value1, value2, operate);



// Practice Exercise 6.4
const myArray = [];
for (let i = 0; i < 10; i++) {
    let valUe1 = 5 * i;
    let valUe2 = i * i;
    let res = cal(valUe1, valUe2, "+");
    myArray.push(res);
}

console.log(myArray);
function cal(a, b, op) {
    if (op == "-") {
        return a - b;
    } else {
        return a + b;
    }
}


// Practice Exercise 6.5
let num = "1000";
(function () {
    let num = "100";
    console.log(num);
})();
let result = (function () {
    let num = "Rabiya";
    return num;
})();
console.log(result);
console.log(num);
(function (num) {
    console.log(`My name is ${num}`);
})("Rabiya");

// Practice Exercise 6.6
function calcFactorial(nr) {
    console.log(nr);
    if (nr === 0) {
        return 1;
    }
    else {
        return nr * calcFactorial(--nr);
    }
}
console.log(calcFactorial(4));



// Practice Exercise 6.7
let start = 10;
function loop1(val) {
    console.log(val);
    if (val < 1) {
        return;
    }
    return loop1(val - 1);

}
loop1(start);
function loop2(val) {
    console.log(val);
    if (val > 0) {
        val--;
        return loop2(val);
    }
    return;
}
loop2(start);

// Practice Exercise 6.8
const test = function (val) {
    console.log(val);
}
test('Hi World');

function test1(val) {
    console.log(val);
}
test1("HEY WORLD");


// Chapter Project 1
const main = function counter(i) {
    console.log(i);
    if (i < 10) {
        return counter(i + 1);
    }
    return;
}
main(0);



// Chapter Project 1
const one = () => console.log('one');
const two = () => console.log('two');
const three = () => {
    console.log('three');
    one();
    two();
}
const four = () => {
    console.log('four');
    setTimeout(one, 0);
    three();
}
four();

