"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hello world");
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
//# sourceMappingURL=index.js.map