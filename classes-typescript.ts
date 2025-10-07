
class User {

    name: string;
    age: number;
    dateOfBirth: Date

    constructor(name: string, age: number, dateOfBirth: Date) {

        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;

    }

    greet(): string {

        return `Name of the user is ${this.name}, and the age is ${this.age} and the date of birth is: ${this.dateOfBirth.toISOString()}`

    }


}

let employeeUser: User = new User("Umair", 3, new Date(1991, 10, 15))

console.log(employeeUser);
console.log(employeeUser.greet());


class AdminUser extends User {
    isAdmin: boolean;
    isActive?: boolean;
    departments?: string[]


    constructor(name: string, age: number, dateOfBirth: Date, isAdmin: boolean,) {
        super(name, age, dateOfBirth)

        this.isAdmin = isAdmin;
    }

}


let adminUser : AdminUser = new AdminUser("John Doe", 43, new Date(), false);


console.log(adminUser)