console.log("hello world")


// Declaraing objects


type NetworkStateLoading = {
    state :"loading",
    date: Date;
}

type NetworkStateCompleted ={ 
    state: "Completed";
    size: number;
    date: Date;
}

type NetworkStateInProgress = {
    state: "In Progress";
    errorCode: string;
    date: Date;
}

type Mammal = {
    livesOnLand : Boolean;
    canFly: Boolean;
    hasNails: Boolean;
}

type Bird = {
    livesOnLand : Boolean;
    canFly: Boolean;
}

type IntersectedAnimal = Bird & Mammal;

let intersectedAnimal : IntersectedAnimal = {
    livesOnLand: true,
    canFly: false,
    hasNails: false
}
type NetworkState = NetworkStateCompleted | NetworkStateInProgress | NetworkStateLoading


let networkState : NetworkState = {
    size: 2,
    state: "Completed",
    date : new Date()
}

function getState(networkState: NetworkState) {

    switch(networkState.state) {

        case "loading":
            return `${networkState.state}`;

        case "In Progress": 
            return `${networkState.state} with  error code ${networkState.errorCode}`;

        case "Completed":
            return `${networkState.state} with size: ${networkState.size}`;
        default:
            console.log("Dont know what happened")
    }
}

console.log(getState( { state: "In Progress", errorCode: "43" }));


type ReadOnlyAndOptions = {
    readonly name: "UK" | "AI",
    age: number,
    dob? : Date
}

let readOnlyAndOptions : ReadOnlyAndOptions = {
    age: 3,
    name: "UK"
};


console.log(readOnlyAndOptions)


type Post = {
    name: string;
    date: Date;
    age: number;
}

type SoundPost = {
    size: number;
    post: Post;
}

type ImagePostData = {
    name: string;
    size: number;
    fileUrl: string;
}

type ImagePost = {
    size: number;
    post: Post;
    images: ImagePostData[]
}

let imagePost : ImagePost = {
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
}

console.log(typeof imagePost)
console.log(imagePost.images[0])


let soundPost: SoundPost = { size: 3, post: {
    name: "new post",
    date: new Date(),
    age: 32
} }

console.log(soundPost)


let newPostForPosting: Post = { name: "Umair", date: new Date(), age: 3 }




/// Union types
type stringOrNumber = string | number | undefined;

let n1Stirng : stringOrNumber = "This is it";
let n2String : stringOrNumber    = 3;

console.log(n1Stirng)

// Conditional types
type customDate = Date;
type customString= String;

type trueString = customString extends string ? true : false;

// Typecasting

let firstName = <any>"Mark";

console.log(typeof firstName)

let secondName = 1 as any;

console.log(typeof secondName)

let person = {
    name: "Mark",
    age: "32"
}

let brandOfCar: Object = {
    brand: "BMW",
    color:"black"
}

brandOfCar = [];


let newObjectCar : {
    name: string;
    age: number;

} = {
    name : "Hello ",
    age: 20
}

let post = {
    title: "String",
    name: "Stirng",
    date: new Date()
}


// Typescript conversion 
let fetchedData = {
    name: "Mark Antony",
    email: "abc@gmail.com"
}

type dataType = {
    name: "Mark Antony",
    email: "abc@gmail.com"
}

function getData() {
    return fetchedData as dataType
}


const dataFetched = getData();

console.log(typeof dataFetched)


const students = [

    { name: "John Doe", age: "32", profession: "laywer" },
    { name: "John Doe", age: "52", profession: "teacher" },
    { name: "John Doe", age: "49", profession: "doctor" },
    { name: "John Doe", age: "23", profession: "engineer" }

]

for (let student of students) {

    console.log("Name: ", student.name)
}

function addNumbersInTs(a:number, b:number) {

    return a+b;
}


// @ts-ignore
function addNumbers(a,b) {
    return a + b;
}

console.log(addNumbers(2, 4))

console.log("2", 4)

// @ts-ignore
console.log(addNumbersInTs("test", 1))

/// Now for the symbol

let id: symbol = Symbol(12234);

const user = {
    [id]: "123",
    name: "Uk",
    getId() {
        return this[id];
    }
}

console.log(user.name);
console.log(user.getId())

// Unknown type

function multipleNumber(number: unknown) {

    if (typeof number == "number")
        return number * 2;

    else 
        throw Error("Unknown tpye")
}


console.log(multipleNumber(2));
// console.log(multipleNumber("2"));

// Define the types of the strings
// Declaation
type CustomString = string;
type CustomNumber = number;
type CustomDate = Date;
type CustomSymbol = Symbol;

// Annotation
let customStringValue: CustomString = "Some string";
let customNumber: CustomNumber = 1;
let customSymbol: CustomSymbol = Symbol(123)

const studentWithSymbol = {
    customSymbol: 32,
    customNumber : customNumber,

}

console.log(customSymbol.valueOf())
console.log(customSymbol.description)
console.log(studentWithSymbol.customNumber)

console.log(typeof customStringValue)


function duckTyping(a: number, b: number) {
    return a * b;
}

// Inference
let c = duckTyping(1, 3)
