/*Practice exercise 3.1
 1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and
 "Apples."
 2. Check your list length in the console.
 3. Update "Bread" to "Bananas."
4. Output your entire list to the console.*/

// ANSWER:
const myList = ["Milk", "Bread", "Apples."];
console.log(myList.length);
myList[1] = "Bananas";
console.log(myList);


/*Practice exercise 3.2
1. Create an empty array to use as a shopping list.
2. Add Milk, Bread, and Apples to your list.
3. Update "Bread" with Bananas and Eggs.
4. Remove the last item from the array and output it into the console.
5. Sort the list alphabetically.
6. Find and output the index value of Milk.
7. After Bananas, add Carrots and Lettuce.
8. Create a new list containing Juice and Pop.
9. Combine both lists, adding the new list twice to the end of the first list.
10. Get the last index value of Pop and output it to the console.
11. Your final list should look like this:*/

// ANSWER:
const myLIST = []
myLIST.push("Milk", "Bread", "Apples");
console.log(myLIST);
myLIST.splice(1, 1, "Bananas", "Eggs");
const removeLast = myLIST.pop();
console.log(removeLast);
myLIST.sort();
console.log(myLIST.indexOf("Milk"));
myLIST.splice(1, 0, "Carrots", "Lettuce");
console.log(myLIST);
const myLIST2 = ["Juice", "Pop"]
console.log(myLIST2);
const finalList = myLIST.concat(myLIST2);
console.log(finalList);
console.log(finalList.lastIndexOf("Pop"));
console.log(finalList);

/*Practice exercise 3.3
1. Create an array containing three values: 1, 2, and 3.
2. Nest the original array into a new array three times.
3. Output the value 2 from one of the arrays into the console.*/


// ANSWER:
const myArr = [1, 2, 3];
console.log(myArr);
const bigArr = [myArr, myArr, myArr];
console.log(bigArr[1][1]);
console.log(bigArr[0][1]);
console.log(bigArr[2][1]);

/* Practice exercise 3.4
1. Create a new myCar object for a car. Add some properties, including, but not
limited to, make and model, and values for a typical car or your car. Feel free
to use booleans, strings, or numbers.
JavaScript Multiple Values
2. Create a variable that can hold the string value color. This variable
containing a string value color can now be used to reference the property
name within myCar. Then, use the variable within the square bracket notation
to assign a new value to the color property in myCar.
3. Use that same variable and assign a new property string value to it, such as
forSale. Use the bracket notation once again to assign a new value to the
forSale property to indicate whether the car is available for purchase.
4. Output make and model into the console.
5. Output the value of forSale into the console.*/

// ANSWER:
const myCar = {
    make: "Toyota",
    model: "Corolla",
    tires: 4,
    doors: 4,
    color: "Silver",
    forSale: false
}

console.log(typeof myCar);

let propColor = "color";
myCar[propColor] = "red";
propColor = "forSale";
myCar[propColor] = true;
console.log(myCar.make + " " + myCar.model);
console.log(myCar.forSale);

/* Practice exercise 3.5
1. Create an object named people that contains an empty array that is called
friends.
2. Create three variables, each containing an object, that contain one of your
friend's first names, last names, and an ID value.
3. Add the three friends to the friend array.
4. Output it to the console. */

// ANSWER:
const people = { friends: [] };
const friend1 = { first: "Rabiya", last: "Noor", id: 1 };
const friend2 = { first: "Hafsa", last: "Rafiq", id: 2 };
const friend3 = { first: "Saima", last: "Noor", id: 3 };
people.friends.push(friend1, friend2, friend3);
console.log(people)

/* Chapter projects
Manipulating an array*/

// ANSWER:
const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
    { test: 'one', score: 55 }, ['one', 'two']];
console.log(theList);
theList.pop();
theList.shift();
theList.unshift("FIRST");
theList[3] = "hello World";
theList[2] = "MIDDLE";
theList.push("LAST");
console.log(theList);

/* Chapter projects
Company product catalog*/

// ANSWER:
const inventory = [];
const item1 = {
    name: "computer",
    model: "imac",
    cost: 1000,
    qty: 3
}
const item2 = {
    name: "phone",
    model: "android",
    cost: 500,
    qty: 11
}
const item3 = {
    name: "tablet",
    model: "ipad",
    cost: 650,
    qty: 1
}
inventory.push(item1, item2, item3);
console.log(inventory);
console.log(inventory[2].qty);