"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hello world");
let intersectedAnimal = {
    livesOnLand: true,
    canFly: false,
    hasNails: false
};
let networkState = {
    size: 2,
    state: "Completed",
    date: new Date()
};
function getState(networkState) {
    switch (networkState.state) {
        case "loading":
            return `${networkState.state}`;
        case "In Progress":
            return `${networkState.state} with  error code ${networkState.errorCode}`;
        case "Completed":
            return `${networkState.state} with size: ${networkState.size}`;
        default:
            console.log("Dont know what happened");
    }
}
let readOnlyAndOptions = {
    age: 3,
    name: "UK"
};
console.log(readOnlyAndOptions);
let imagePost = {
    size: 1,
    post: {
        name: "Umair Khan",
        date: new Date(),
        age: 32
    },
    images: [
        { name: "Yello flicker beat", size: 32, fileUrl: "http://www.google.com" },
        { name: "Yello flicker beat", size: 32, fileUrl: "http://www.google.com" }
    ]
};
console.log(typeof imagePost);
console.log(imagePost.images[0]);
let soundPost = { size: 3, post: {
        name: "new post",
        date: new Date(),
        age: 32
    } };
console.log(soundPost);
let newPostForPosting = { name: "Umair", date: new Date(), age: 3 };
let n1Stirng = "This is it";
let n2String = 3;
console.log(n1Stirng);
// Typecasting
let firstName = "Mark";
console.log(typeof firstName);
let secondName = 1;
console.log(typeof secondName);
let person = {
    name: "Mark",
    age: "32"
};
let brandOfCar = {
    brand: "BMW",
    color: "black"
};
brandOfCar = [];
let newObjectCar = {
    name: "Hello ",
    age: 20
};
let post = {
    title: "String",
    name: "Stirng",
    date: new Date()
};
// Typescript conversion 
let fetchedData = {
    name: "Mark Antony",
    email: "abc@gmail.com"
};
function getData() {
    return fetchedData;
}
const dataFetched = getData();
console.log(typeof dataFetched);
const students = [
    { name: "John Doe", age: "32", profession: "laywer" },
    { name: "John Doe", age: "52", profession: "teacher" },
    { name: "John Doe", age: "49", profession: "doctor" },
    { name: "John Doe", age: "23", profession: "engineer" }
];
for (let student of students) {
    console.log("Name: ", student.name);
}
function addNumbersInTs(a, b) {
    return a + b;
}
// @ts-ignore
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(2, 4));
console.log("2", 4);
// @ts-ignore
console.log(addNumbersInTs("test", 1));
/// Now for the symbol
let id = Symbol(12234);
const user = {
    [id]: "123",
    name: "Uk",
    getId() {
        return this[id];
    }
};
console.log(user.name);
console.log(user.getId());
// Unknown type
function multipleNumber(number) {
    if (typeof number == "number")
        return number * 2;
    else
        throw Error("Unknown tpye");
}
console.log(multipleNumber(2));
// Annotation
let customStringValue = "Some string";
let customNumber = 1;
let customSymbol = Symbol(123);
const studentWithSymbol = {
    customSymbol: 32,
    customNumber: customNumber,
};
console.log(customSymbol.valueOf());
console.log(customSymbol.description);
console.log(studentWithSymbol.customNumber);
console.log(typeof customStringValue);
function duckTyping(a, b) {
    return a * b;
}
// Inference
let c = duckTyping(1, 3);
