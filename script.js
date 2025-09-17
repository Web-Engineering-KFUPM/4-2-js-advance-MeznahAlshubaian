/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================

class Student {
    constructor(first, last, gpa) {
        this.first = first;
        this.last = last;
        this._gpa = gpa;
    }
    get fullName() { return `${this.first} ${this.last}`; }
    get gpa() { return this._gpa; }
    set gpa(v) {
        if (v >= 0 && v <= 4)
            this._gpa = v;
        else {
            console.log("Invalid GPA");
    }
}
}
const student1 = new Student("Meznah","Alshubaian",3.9);
console.log(student1.fullName);
console.log(student1.gpa);

// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================

const courseTitles = {
    A101: "Intro",
    A201: "Data Structures",
    A301: "Computer Organization"
};
for (const key in courseTitles) {
    console.log(key, courseTitles[key]);
}

// End of Advance JavaScript Lab — good luck!
