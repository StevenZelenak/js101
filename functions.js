console.log("hello");

const nuggeizer = (animal) => {
    
    const output = `processed ${animal}`;
    return output;
}

console.log(nuggeizer('chicken'));


dogBreed = (dogBreed) =>{
    const output = `My favorite dog breed is ${dogBreed}`;
    return output;

}

console.log(dogBreed('lab'));
console.log(dogBreed('monkey'));


fortyTwo = (number) => {
 const output = number + 42;
 return output;
}

console.log(fortyTwo(2));
console.log(fortyTwo(42));


oldAge = (yearBorn) => {
const age = 2099 - yearBorn;
const output = `You will be ${age} years old in 2099!`;
return output;
}

console.log(oldAge(1954));
console.log(oldAge(1991));