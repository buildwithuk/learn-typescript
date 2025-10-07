var _a;
console.log("hello world");
var intersectedAnimal = {
    livesOnLand: true,
    canFly: false,
    hasNails: false
};
var networkState = {
    size: 2,
    state: "Completed",
    date: new Date()
};
function getState(networkState) {
    switch (networkState.state) {
        case "loading":
            return "".concat(networkState.state);
        case "In Progress":
            return "".concat(networkState.state, " with  error code ").concat(networkState.errorCode);
        case "Completed":
            return "".concat(networkState.state, " with size: ").concat(networkState.size);
        default:
            console.log("Dont know what happened");
    }
}
var readOnlyAndOptions = {
    age: 3,
    name: "UK"
};
console.log(readOnlyAndOptions);
var imagePost = {
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
var soundPost = { size: 3, post: {
        name: "new post",
        date: new Date(),
        age: 32
    } };
console.log(soundPost);
var newPostForPosting = { name: "Umair", date: new Date(), age: 3 };
var n1Stirng = "This is it";
var n2String = 3;
console.log(n1Stirng);
// Typecasting
var firstName = "Mark";
console.log(typeof firstName);
var secondName = 1;
console.log(typeof secondName);
var person = {
    name: "Mark",
    age: "32"
};
var brandOfCar = {
    brand: "BMW",
    color: "black"
};
brandOfCar = [];
var newObjectCar = {
    name: "Hello ",
    age: 20
};
var post = {
    title: "String",
    name: "Stirng",
    date: new Date()
};
// Typescript conversion 
var fetchedData = {
    name: "Mark Antony",
    email: "abc@gmail.com"
};
function getData() {
    return fetchedData;
}
var dataFetched = getData();
console.log(typeof dataFetched);
var students = [
    { name: "John Doe", age: "32", profession: "laywer" },
    { name: "John Doe", age: "52", profession: "teacher" },
    { name: "John Doe", age: "49", profession: "doctor" },
    { name: "John Doe", age: "23", profession: "engineer" }
];
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var student = students_1[_i];
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
var id = Symbol(12234);
var user = (_a = {},
    _a[id] = "123",
    _a.name = "Uk",
    _a.getId = function () {
        return this[id];
    },
    _a);
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
var customStringValue = "Some string";
var customNumber = 1;
var customSymbol = Symbol(123);
var studentWithSymbol = {
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
var c = duckTyping(1, 3);
