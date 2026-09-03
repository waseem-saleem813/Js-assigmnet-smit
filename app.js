function myFunction() {
    console.log("Hello world!");
}

myFunction();


function concatTwoWords(name, fatherName) {
    console.log(name + " " + fatherName);
}

concatTwoWords("waseem", "saleem");

let fruits = ["Apple", "Banana", "Mango", "Orange"]; 

function printFruits(fruits) {
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
}

printFruits(fruits);



let numbers = [10, 15, 22, 31, 40];

function checkNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(numbers[i] + " is Even");
        } else {
            console.log(numbers[i] + " is Odd");
        }
    }
}

checkNumbers(numbers);
