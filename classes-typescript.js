"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    age;
    dateOfBirth;
    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }
    greet() {
        return `Name of the user is ${this.name}, and the age is ${this.age} and the date of birth is: ${this.dateOfBirth.toISOString()}`;
    }
}
let employeeUser = new User("Umair", 3, new Date(1991, 10, 15));
console.log(employeeUser);
console.log(employeeUser.greet());
class AdminUser extends User {
    isAdmin;
    isActive;
    departments;
    constructor(name, age, dateOfBirth, isAdmin) {
        super(name, age, dateOfBirth);
        this.isAdmin = isAdmin;
    }
}
let adminUser = new AdminUser("John Doe", 43, new Date(), false);
console.log(adminUser);
//# sourceMappingURL=classes-typescript.js.map