// 3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.

let arr = ["Alok", "Kavya", 12, "Ankit", true, "Abhi", false];
let newArr = [];
for (let element of arr) {
    if (typeof (element) == "string") {
        newArr.push(element.toUpperCase());
    }
}
console.log(newArr);