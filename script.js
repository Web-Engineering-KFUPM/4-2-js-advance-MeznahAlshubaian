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

//=========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================

const str = "Hello";
console.log("Length: ", str.length);
console.log("First character: ",str.charAt(0));

// ===================================
// TODO-4: DATE — day, month, and year
// ===================================

const d = new Date();
console.log("Day: ",d.getDate());
console.log("Month: ",d.getMonth());
console.log("Year: ",d.getFullYear());

// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================

const nums = [1,2,3,4,5,6,7,8,9,10];
const min = Math.min(...nums);
const max = Math.max(...nums);
console.log("array: ",nums);
console.log ("min: ",min,"max: ",max);

// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================

function maxInArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("Array must be non-empty.");
    }
    return Math.max(...arr);
}
try {
    const x = maxInArray([]);   // This will throw
} catch (e) {
    console.log("error --> empty array");
} finally {
    console.log("Final block");
}

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================

const words = ["ban", "babble", "make", "flab"];
const re = /ab/;

words.forEach(w => {
    if (re.test(w)) {
        console.log(`${w} matches!`);
    }
});

// End of Advance JavaScript Lab — good luck!
