"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function someSampleFunction(name, age) {
    return `My name is ${name} and my age is ${age}`;
}
const someSampleFunctionToBeCalled = function (name, age) {
    return `My name is ${name} and my age is ${age}`;
};
const arrowFunction = (name, age) => {
    return `My name is ${name} and my age is ${age}`;
};
// Optional paramters
function functionWithOptionalParameters(name, age, country) {
    if (country) {
        return `My name is ${name} and my age is ${age} and I live in the country ${country}`;
    }
    else {
        return `My name is ${name} and my age is ${age}`;
    }
}
let personData = {
    name: "Umair",
    age: 5,
    greeting: (greeting) => { return `${greeting}! My anem is ${personData.name} and my age is ${personData.age}`; }
};
personData.greeting("Some sample greeting");
const students = ["John Doe", "HelloWorld", "Shatungri"];
students.map((student) => { student + " Hello World"; });
const asyncFunction = async () => {
    let toReturn = "To retur";
    return Promise.resolve(toReturn);
};
async function functionWithPromise(name) {
    return Promise.resolve(name);
}
let returnFromFunction = functionWithPromise("Umair");
returnFromFunction.then((value) => {
    console.log(value);
});
