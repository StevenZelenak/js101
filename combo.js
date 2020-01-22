console.log("COMBO");


// Check whether a number is even or odd
const evenOdd = (number) => {

    if(number % 2 === 0){
        return "Even";
    }else {
        return "Odd";
    }
}

console.log(evenOdd(2));
console.log(evenOdd(3));

// turn a number into its opposite
const oppNumber = (number) =>{
 
    if(number > 0){
        return -Math.abs(number);
    }
    else if (number < 0){
        return Math.abs(number);
    }
    else{
        return 0;
    }
}

console.log(oppNumber(2));
console.log(oppNumber(-3));
console.log(oppNumber(0));

// check if a number is the same backwards as forward
const palindrome = (word) =>{

    word = word.toLowerCase();

    if(word === word.split('').reverse().join(''))
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(palindrome('dog'));
console.log(palindrome('anna'));
console.log(palindrome('Anna'));



// check whether the animal is a alligator or not
const animalEcounter = (animal) =>{

    if(animal === 'alligator'){

        return 'small';

    }
    else{
        return 'wide';
    }

}

console.log(animalEcounter('alligator'));
console.log(animalEcounter('fish'));