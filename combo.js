console.log("COMBO");

const evenOdd = (number) => {

    if(number % 2 === 0){
        return "The number is even.";
    }else {
        return "The number is odd";
    }
}

console.log(evenOdd(2));
console.log(evenOdd(3));


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


const palindrome = (word) =>{

    if(word === word.split('').reverse().join(''))
    {
        return "The word is a palindrome";
    }
    else{
        return "The word is not a palindrome";
    }
}

console.log(palindrome('dog'));
console.log(palindrome('anna'));


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