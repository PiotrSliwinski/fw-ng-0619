/*
- TYPESCRIPT 

- TS is a compile-time technology.

- Install:                  npm install -g typescript
- Compile in watch mode:    tsc code.ts -w

- An optional type system for JS
- More understandable self-documenting code.
- Catch errors at compile time, not runtime
- TS does not exist at run-time.

https://www.typescriptlang.org/play/

// TS offers 2 advantages:

// Generates compile-time errors EARLY in terminal inside editor (Visual Studio)
// Self-documenting code that describes your intentions to you/team.

*/

// BASIC TYPES in Typescript ================================
let city:string = "Vienna";
city = "Oslo";

let year:number = 2014;
year++;

let smoker:boolean = false;
smoker = !smoker;

// Allow you to be relaxed and not define types for every line of code.
let village = "Little Snoring";

// Communicating that you have not decided on a specific type.
let project:any = {};
project = [];
// ============================================================

// define an array of numbers : lottery
let lotto : number[] = [ 4,5,6,7,8 ];

let extra = "24";
lotto.push( Number( extra ));

let fruit : Array<string> = [ "apples","pears" ];
// ============================================================

// Write an arrow function to double numbers
// and define the type of the argument and return type.

const double = (n:number):number => n*2 ;
// ============================================================

// let person : { name:string, age:number } = { name:"Sigmund Freud" , age:64 };

// Define custom types in TS

interface Viennese{
    name:string;
    age:number;
}

interface Biog extends Viennese{
    quote:string;
    smoker:boolean;
}

let freud : Biog = { 
    name:"Sigmund Freud" , 
    age:64, 
    smoker:false, 
    quote:"Sometimes a cigar is just a cigar." 
};

// Giving TS a clue that I plan to populate this object with data later....
let schiele : Viennese = {} as Viennese;

schiele.name="Egon Schiele" ;
schiele.age=45;

// Interface describes the "shape"/structure of a custom type.
// Dont have to define an ES6 class.
// Does not exist at run-time 
// Interface is a named composition of simple types.

// let famousLocals : Array<Viennese> = [ freud,schiele ];
let famousLocals : Viennese[] = [ freud,schiele ];

// Write a function called describe : Sigmund Freud is aged 64.
// Use TS types in the function
// Use template literals : back-ticks and ${}
// Make it work for array famousLocals using forEach

const describe = ( local:Viennese ) => 
console.log(`${local.name} is ${local.age} years old.`) ;

famousLocals.forEach( describe );


// Use INTERFACE in a function ? ===============================

// Function : pass in city,temp : returned object { city:"Seville", temp:40 }
// makeCity( city, temp ) returns object 

interface City{
    name:string;
    temp:number;
}

const makeCity = (name:string,temp:number):City => ({ name,temp });

let holiday:City = makeCity("Seville",42);