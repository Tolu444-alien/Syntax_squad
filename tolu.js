/*function greetUser(name, age){
    return `Hello ${name}, you are ${age} years old.`;
}

console.log(greetUser("Ada", 20)); //Hello Ada, you are 20 years old.

function checkEvenOrOdd(number){
    return number % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOrOdd(7)); // Odd
console.log(checkEvenOrOdd(10)); // Even*/

function calculateGrade(score){
    if (typeof score !== 'number' || isNaN(score)) return "Invalid score";
    if (score < 0 || score > 100) return "Invalid score";
    if (score >= 70) return "A";
    if (score >= 60) return "B";
    if (score >= 50) return "C";
    if (score >= 45) return "D";
    if (score >= 40) return "E";
    return "F";
}

console.log(calculateGrade(85)); // A
console.log(calculateGrade(101)); // Invalid score 