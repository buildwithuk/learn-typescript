"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello World");
console.log("Another hello world");
class StaticClass {
    static count = 0;
    static incrementCount() {
        return this.count++;
    }
}
console.log(StaticClass.incrementCount());
//# sourceMappingURL=app.js.map