// Declare a new number array

let a: Array<number> = [1,2, 3,4,5];

let anotherDeclaraction : number[] = [1, 3,4 ,5, 6, 7]


// Now lets declare complex array

let complexArray : (string | number)[] = ["hello", 1]

//Now lets define tuple 
// A tuple has a fixed shape
// And it will not allow the changing of the shape or size

let tuple : [string, string, number] = ["hello", "world", 1];

console.log(tuple)


type PassingStudents = [boolean, ...string[], number];


let passingStudnets : PassingStudents = [true, "UK", "John Doe", "Helen of Greece", "Spartans", 1];

