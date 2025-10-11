
class User {

    name: string;
    age: number;
    dateOfBirth: Date;
    protected profession: string

    constructor(name: string, age: number, dateOfBirth: Date, profession: string) {

        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.profession = profession;
    }

    greet(): string {

        return `Name of the user is ${this.name}, and the age is ${this.age} and the date of birth is: ${this.dateOfBirth.toISOString()}`

    }


}

let employeeUser: User = new User("Umair", 3, new Date(1991, 10, 15), "Software Engineer")

console.log(employeeUser);
console.log(employeeUser.greet());


class AdminUser extends User {
    isAdmin: boolean;
    isActive?: boolean;
    departments?: string[]


    constructor(name: string, age: number, dateOfBirth: Date, isAdmin: boolean, profession: string) {
        super(name, age, dateOfBirth, profession)
        this.isAdmin = isAdmin;
    }

}


let adminUser: AdminUser = new AdminUser("John Doe", 43, new Date(), false, "labour");



class ShortHandScript {


    constructor(public name: string, private age: number, public readonly profession: string) { }


}

class AnotherClass extends ShortHandScript {

    constructor(private dob: Date, name: string, age: number, profession: string) {
        super(name, age, profession)
    }


}

let instanceOfAnotherClass: AnotherClass = new AnotherClass(new Date(), "Umair", 32, "Software Engineer");


console.log(adminUser)