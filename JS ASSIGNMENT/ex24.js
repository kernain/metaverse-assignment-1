// 24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

let str1 = "test";
let str2 = "test";

console.log(str1 == str2)

let str3 = "testing";
let str4 = "tested";

console.log(str3 == str4)

let str5 = "Check";
let str6 = "check";

// Without LOWERCASE FUNCTION

console.log(str5 == str6)

// With LOWERCASE FUNCTION

console.log(str5.toLocaleLowerCase() == str6)

// Numerical Tests

    console.log(3 + 1 == 5) // false
    console.log(3 + 1 < 5) // true
    console.log(4 + 2 > 7) // false
    console.log(2 + 2 != 3) // true

// AND & OR Gate tests

console.log(3 + 1 == 5 && 3 + 3 == 6) // false
console.log(3 + 1 < 5 && 6 > 5) // true
console.log(4 + 2 > 7 || 4 + 4 == 7) // false
console.log(2 + 2 != 3 || 3 !=  2 + 1) // true

// Array Tests

let cities = ["karachi", "lahore", "islamabad"]

console.log(cities.includes("karachi")) // true
console.log(cities.includes("Rawalpindi")) // false
