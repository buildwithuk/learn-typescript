
function someSampleFunction(name: string, age: number) : string {

    return `My name is ${name} and my age is ${age}`;
}


const someSampleFunctionToBeCalled = function(name : string, age: number) : string {
    return `My name is ${name} and my age is ${age}`;
}

const arrowFunction = (name: string, age: number) : string | number => {
    return `My name is ${name} and my age is ${age}`;
}

// Optional paramters

function functionWithOptionalParameters(name: string, age: number, country? : string) {

    if (country) {
        return `My name is ${name} and my age is ${age} and I live in the country ${country}`;
    } else {
        return `My name is ${name} and my age is ${age}`;
    }


}

type GreetingFunction = (greeting: string) => string;

type Person = {
    name: string, 
    age: number,
    greeting: GreetingFunction
}

let personData : Person = {
    name: "Umair", 
    age: 5,
    greeting: (greeting: string) => { return `${greeting}! My anem is ${personData.name} and my age is ${personData.age}` }
}

personData.greeting("Some sample greeting")


const students: string[] = ["John Doe", "HelloWorld", "Shatungri"];


students.map( (student) => { student + " Hello World" } );



const asyncFunction = async () : Promise<string> => { 

    let toReturn : string = "To retur";
    return Promise.resolve(toReturn)

 };

async function functionWithPromise(name: string) : Promise<string> {
    return Promise.resolve(name);
}


let returnFromFunction = functionWithPromise("Umair")

returnFromFunction.then( (value) => {
    console.log(value);
})


