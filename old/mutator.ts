
class StudentResult {

    private _grade? : string;
    constructor(public name: string, public subjects: string[], public marks: number[]){}

    public get grade() : string { 
        if (this._grade) {
            return this._grade;
        } else {
            throw new Error("Grade is not set")
        }
        
    }
    public set grade(grade: string) {

        let grades: string[] = ["A", "B", "C", "D", "E"];

        if (!grades.includes(grade)) {
            throw new Error("Invalid grade");
        }

        this._grade = grade;
    }
}


const subjects = ["English", "Urdu", "Maths"];
let studentResult : StudentResult = new StudentResult("Umair", subjects, [78, 43, 66]);

studentResult.grade = "3"; // Will throw error



