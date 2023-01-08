// 2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

const fName = "Alok";
const lName = "Verma";
const maritialStatus = true;
const country = "India";
let age = 22;
let mStatus;
if (maritialStatus === true) {
    mStatus = "unmaried";
} else {
    mStatus = "married";
}

console.log(`
My name is ${fName} ${lName}. I live in country ${country}. I am ${age} years old and I am ${mStatus}.
`);
