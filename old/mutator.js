"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StudentResult {
    name;
    subjects;
    marks;
    _grade;
    constructor(name, subjects, marks) {
        this.name = name;
        this.subjects = subjects;
        this.marks = marks;
    }
    get grade() {
        if (this._grade) {
            return this._grade;
        }
        else {
            throw new Error("Grade is not set");
        }
    }
    set grade(grade) {
        let grades = ["A", "B", "C", "D", "E"];
        if (!grades.includes(grade)) {
            throw new Error("Invalid grade");
        }
        this._grade = grade;
    }
}
const subjects = ["English", "Urdu", "Maths"];
let studentResult = new StudentResult("Umair", subjects, [78, 43, 66]);
studentResult.grade = "3"; // Will throw error
