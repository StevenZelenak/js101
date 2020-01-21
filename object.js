console.log("Hi my friends");


const wordLenght = (word) =>{
    return word.length;
}

console.log(wordLenght('cat'))

const ageCheck = (age) =>{

        if(age >= 21){
            return 'PARTY!!!!!!!!!';
        }

        return 'no drinks for you!';

}

console.log(ageCheck(12));
console.log(ageCheck(22));


const expense = {

    dateCreated: '01/17/2020',
    location: 'Baja Burrito',
    cost: 12.57,
    isGood: true,
}

console.log(expense.cost);
console.log(expense['cost']);


const employee = {

    company: 'Walmart',
    position: 'Manager',
    wage: 14.00,
    wearsUniform: true,
    yearsWorked: 2,
    firstName: 'Steve',
    lastName: 'Wild',


}


const statusMaker = (object) => {

    if(object.firstName[0] === 'M' || object.firstName[0] === 'm')
    {
        object.status = 'vip';
        
    }
    else{
        
        object.status = 'peasant';
        
    }

    return object;
}

statusMaker(employee);

console.log(employee);