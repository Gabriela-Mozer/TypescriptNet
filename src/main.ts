console.log("test");
 //Funkcje
// let greet = () => {
//     console.log("Funkcja strzałkowa")
// }
let greet :Function;
 greet = () => {
    console.log("Funkcja strzałkowa")
}
// greet = 'funkcja strzałkowa'; 
const add =(a: number, b:number, c: number | string=10) =>{  // gdy chcemy aby b było number lub stringiem
    console.log(a+b)
    console.log(c)
}
add(5,10, '20');

const minus = (a: number, b :number)=>{
    return a+ b
}
let result =minus(10, 23);
// result ="something else"; // nie możemy tego zrobić bo określiliśmy już typ


//znaki funkcji 
let saygreet: (a: string, b: string) =>void;
saygreet =(name: string, greeting: string) =>{
    console.log(`${name} says ${greeting}`);
}

let calc : (a : number, b:number, c: string)=> number;
calc = (numOne: number,numTwo:number, action:string) =>{
    if(action ==='add'){
        return numOne + numTwo;
    }
    else{
       return numOne - numTwo;
    }
}


let logDetail :(obj:{name:string, age: number}) =>void;
type person = {name:string, age: number};
logDetail = (Lola: {name:string,age:number}) =>{
    console.log(`${Lola.name} is ${Lola.age} years old`);
}

//DOM & Type Casting
const anchor = document.querySelector('a');
if(anchor){
    console.log(anchor.href);
}
