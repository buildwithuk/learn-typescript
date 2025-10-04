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
//# sourceMappingURL=index.js.map