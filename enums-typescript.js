"use strict";
// Declaring an enum
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["left"] = 0] = "left";
    Direction[Direction["right"] = 1] = "right";
    Direction[Direction["up"] = 2] = "up";
    Direction[Direction["down"] = 3] = "down";
})(Direction || (Direction = {}));
console.log(Direction.left);
console.log(Direction.right);
console.log(Direction.down);
console.log(Direction.up);
var Roles;
(function (Roles) {
    Roles["Admin"] = "admin";
    Roles["HR_Manager"] = "hr manager";
    Roles["CEO"] = "ceo";
    Roles["Manager"] = "Manager";
})(Roles || (Roles = {}));
let createdBy = Roles.Admin;
if (createdBy == Roles.Admin) {
    console.log("Wrong");
}
else
    console.log("right");
let userFromDatabase = {
    name: "John Doe",
    age: 1,
    role: Roles.Admin
};
//# sourceMappingURL=enums-typescript.js.map