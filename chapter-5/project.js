let number = parseInt(prompt("Enter a Number:"));

for (i = 1; i < 11; i++) {
    document.getElementById("multiplication-table").innerHTML +=
        `${number} * ${i} = ${number * i} <br>`
}