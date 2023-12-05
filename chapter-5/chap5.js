// Practice Exercise 5.1

const max = 5;
const ranNumber = Math.floor(Math.random() * max) + 1;
console.log(ranNumber);
let correct = false;
while (!correct) {
    let guess = prompt("Guess a Number 1 - " + max);
    guess = Number(guess);
    if (guess === ranNumber) {
        correct = true;
        console.log("You got it " + ranNumber);
    } else if (guess > ranNumber) {
        console.log("Too high");
    } else {
        console.log("Too Low");
    }
}


// Practice Exercise 5.2
let counter = 0;
let step = 5;
do {
    console.log(counter);
    counter += step;
}
while (counter <= 100);

// Practice Exercise 5.3
const myWork = [];
for (let i = 1; i < 10; i++) {
    let stat = i % 2 ? true : false;
    let temp = {
        name: `Lesson ${i}`, status: stat
    };
    myWork.push(temp);
}
console.log(myWork);

// Practice Exercise 5.4
const myTable = [];
const rows = 4;
const cols = 7;
let Counter = 0;
for (let j = 0; j < rows; j++) {
    let tempTable = [];
    for (let k = 0; k < cols; k++) {
        Counter++;
        tempTable.push(Counter);
    }
    myTable.push(tempTable);
}
console.table(myTable)

// Practice Exercise 5.5
const grid = [];
const cells = 64;

let Count = 0;
let row;
for (let x = 0; x < cells + 1; x++) {
    if (Count % 8 == 0) {
        if (row != undefined) {
            grid.push(row);
        }
        row = [];
    }
    Count++
    let Temp = Count;
    row.push(Temp);

}
console.log(grid)

// Practice Exercise 5.6

const myArray = [];
for (let i = 0; i < 10; i++) {
    myArray.push(i + 1);
}
console.log(myArray)

for (let j = 0; j < myArray.length; j++) {
    console.log(myArray[j]);
}
 
for(let val of myArray){
    console.log(val);
}

// Practice Exercise 5.7
const myObject = {
    city1: "Karachi",
    city2: "Lahore",
    city3: "Islamabad",
    city4: "Quetta"
};

for (let prop in myObject) {
    console.log(prop, myObject[prop]);
}

const myArr = ["city1", "city2", "city3", "city4"];

for (let i = 0; i < myArr.length; i++) {
    console.log(i, myArr[i]);
}

for (let el in myArr) {
    console.log(el, myArr[el]);
}

// Practice Exercise 5.8

// continue
let output = "";
let skipThis = 7;
for(let i = 0; i < 10; i++){
if(i === skipThis){
continue;
}
output += i;
}
console.log(output)

// break
let Output = "";
let skipTHis = 7;
for(let i = 0; i < 10; i++){
if(i === skipTHis){
break;
}
Output += i;
}
console.log(Output)

// Chapter project