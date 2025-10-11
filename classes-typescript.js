"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    age;
    dateOfBirth;
    profession;
    constructor(name, age, dateOfBirth, profession) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.profession = profession;
    }
    greet() {
        return `Name of the user is ${this.name}, and the age is ${this.age} and the date of birth is: ${this.dateOfBirth.toISOString()}`;
    }
}
let employeeUser = new User("Umair", 3, new Date(1991, 10, 15), "Software Engineer");
console.log(employeeUser);
console.log(employeeUser.greet());
class AdminUser extends User {
    isAdmin;
    isActive;
    departments;
    constructor(name, age, dateOfBirth, isAdmin, profession) {
        super(name, age, dateOfBirth, profession);
        this.isAdmin = isAdmin;
    }
}
let adminUser = new AdminUser("John Doe", 43, new Date(), false, "labour");
class ShortHandScript {
    name;
    age;
    profession;
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }
}
class AnotherClass extends ShortHandScript {
    dob;
    constructor(dob, name, age, profession) {
        super(name, age, profession);
        this.dob = dob;
    }
}
let instanceOfAnotherClass = new AnotherClass(new Date(), "Umair", 32, "Software Engineer");
console.log(adminUser);
//# sourceMappingURL=classes-typescript.js.map