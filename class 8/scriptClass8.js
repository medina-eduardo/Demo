function makeCoffee(type) {
    return `Here is your ${type} coffee!`; // Use backticks for string interpolation
}
console.log(makeCoffee("latte"));

function greet() {
    console.log("Hello, world!");
}
greet(); // Outputs: Hello, World!

let skills = ["Red", "Blue", "Yellow"]
console.log(skills[0]); //Outputs: Red


let comments = ["Great article!", "This helped a lot", "I disagree."];
for (let i = 0; i < comments.length; i++) { 
    console.log(comments[1]);
}