
// Declaring an enum

enum Direction {

    left, right, up, down
}


console.log(Direction.left)
console.log(Direction.right)
console.log(Direction.down)
console.log(Direction.up)


enum Roles {
    Admin = "admin", 
    HR_Manager = "hr manager", 
    CEO = "ceo", 
    Manager = "Manager"
}

let createdBy = Roles.Admin;

if (createdBy == Roles.Admin) {
    console.log("Wrong")
} else 
    console.log("right")

type UserFromDatabase = {
    name: string, 
    age: number, 
    role : Roles
}


let userFromDatabase : UserFromDatabase = {
    name: "John Doe",
    age: 1, 
    role: Roles.Admin
}

