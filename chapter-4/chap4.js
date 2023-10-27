/* Practice exercise 4.1
1. Create a variable with a Boolean value.
2. Output the value of the variable to the console.
3. Check whether the variable is true and if so, output a message to the console,
using the following syntax:
if(myVariable){
//action
}
Logic Statements
4. Add another if statement with an ! in front of the variable to check whether
the condition is not true, and create a message that will be printed to the
console in that instance. You should have two if statements, one with an
! and the other without. You could also use an if and an else statement
instead—experiment!
5. Change the variable to the opposite to see how the result changes.*/

// ANSWER:
const test = false;
console.log(test);
if (test) {
    console.log("It's True");
}
if (!test) {
    console.log("False now");
}

/*Practice exercise 4.2
1. Create a prompt to ask the user's age
2. Convert the response from the prompt to a number
3. Declare a message variable that you will use to hold the console message for
the user
4. If the input age is equal to or greater than 21, set the message variable to
confirm entry to a venue and the ability to purchase alcohol
5. If the input age is equal to or greater than 19, set the message variable to
confirm entry to the venue but deny the purchase of alcohol
6. Provide a default else statement to set the message variable to deny entry if
none are true
7. Output the response message variable to the console */

// ANSWER:
let age = prompt("How old are you?");
age = Number(age);
let message;
if (age >= 21) {
    message = "You can enter and drink.";
} else if (age >= 19) {
    message = "You can enter but not drink.";
} else {
    message = "You are not allowed in!";
}
console.log(message);

/* Practice exercise 4.3
1. Create a Boolean value for an ID variable
2. Using a ternary operator, create a message variable that will check whether
their ID is valid and either allow a person into a venue or not
3. Output the response to the console*/

// ANSWER:
const id = true;
const massage = (id) ? "Allowed In" : "Denied Entry";
console.log(massage);

/* Practice exercise 4.4
As discussed in Chapter 1, Getting Started with JavaScript, the JavaScript function Math.
random() will return a random number in the range of 0 to less than 1, including 0
but not 1. You can then scale it to the desired range by multiplying the result and
using Math.floor() to round it down to the nearest whole number; for example, to
generate a random number between 0 and 9:
In this exercise, we'll create a Magic 8-Ball random answer generator:
1. Start by setting a variable that gets a random value assigned to it. The value
is assigned by generating a random number 0-5, for 6 possible results. You
can increase this number as you add more results.
2. Create a prompt that can get a string value input from a user that you can
repeat back in the final output.
3. Create 6 responses using the switch statement, each assigned to a different
value from the random number generator.
4. Create a variable to hold the end response, which should be a sentence
printed for the user. You can assign different string values for each case,
assigning new values depending on the results from the random value.
5. Output the user's original question, plus the randomly selected case
response, to the console after the user enters their question.*/

// ANSWER:
const randomNumber = Math.floor(Math.random() * 6);
let answer = "Something went wrong";
let question = prompt("Ask me anything");
switch (randomNumber) {
    case 0:
        answer = "It will work out";
        break;
    case 1:
        answer = "Maybe, maybe not";
        break;
    case 2:
        answer = "Probably not";
        break;
    case 3:
        answer = "Highly likely";
        break;
    default:
        answer = "I don't know about that";
}
let output = "You asked me " + question + ". I think that " + answer;
console.log(output);


/* Practice exercise 4.5
1. Create a variable called prize and use a prompt to ask the user to set the
value by selecting a number between 0 and 10
2. Convert the prompt response to a number data type
3. Create a variable to use for the output message containing the value "My
Selection: "
4. Using the switch statement (and creativity), provide a response back
regarding a prize that is awarded depending on what number is selected
5. Use the switch break to add combined results for prizes
6. Output the message back to the user by concatenating your prize variable
strings and the output message string*/

// ANSWER:
let prize = prompt("Pick a number 0-10");
prize = Number(prize);
let Output = "My Selection:";
switch (prize) {
    case 0:
        Output += "Gold";
    case 1:
        Output += "Coin";
        break
    case 2:
        Output += "Big ";
    case 3:
        Output += "Box of ";
    case 4:
        Output += "Silver ";
    case 5:
        Output += "Bricks ";
        break;
    default:
        Output += "Sorry Try Again";
}
console.log(Output);


