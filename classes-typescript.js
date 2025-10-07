var User = /** @class */ (function () {
    function User(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }
    User.prototype.greet = function () {
        return "Name of the user is ".concat(this.name, ", and the age is ").concat(this.age, " and the date of birth is: ").concat(this.dateOfBirth.toISOString());
    };
    return User;
}());
var employeeUser = new User("Umair", 3, new Date(1991, 10, 15));
console.log(employeeUser);
console.log(employeeUser.greet());
