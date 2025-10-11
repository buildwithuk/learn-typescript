console.log("Hello World")   
console.log("Another hello world")

class StaticClass {

    static count : number = 0

    static incrementCount() {
        return this.count++
    }


}

console.log(StaticClass.incrementCount())
