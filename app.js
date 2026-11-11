function player(name, score ) {
    this.name = name;
    this.score  = score ;
}

let player1 = new player("Ali", 100);
let player2 = new player("Ahmed", 50);

let players = [player1, player2];

let player3 = new player("Usman", 60);

players.push(player3);

console.log(players);

let student = {
    name: "Ali",
    age: 15,
    class: "10th"
}

console.log(`My name is ${student.name}`)
console.log(`My age is ${student.age}`)
console.log(`My class is ${student.class}`);


let fruits = ["Apple", "Mango", "Banana"];

console.log(`My first fruit is ${fruits[0]}`);
console.log(`My second fruit is ${fruits[1]}`);
console.log(`My third fruit is ${fruits[2]}`);


// Prototype Kya ha? 
// humara multiple objets ko ek he ma bana ka kam ata ha es sa code reuse aur clean rehta ha. aur ya js machnisam sa 



// In Keyword 

// js ma In keyword object keys ko check kerta ha. aur answer boolean ma deta ha ya sirf keys check kerta ha value nhi. and keys hamesha doble quotes ma dena hota ha 


let car = {
    brand: "Toyota",
    color: "Black"
};

if ("brand" in car) {
    console.log("Brand is available");
} else {
    console.log("Brand is not available");
}


// hasOwnProperty bhi In keyword ke tarha kam kerta ha bass ya apni property ko check kerta ha jab ka In keyword apni prouotypes bhi check kerta ha 
