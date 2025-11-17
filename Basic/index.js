// Part-1
// index.js
// without typescript
// function addNumbers(num1, num2) {
//   console.log(num1 + num2);
// }
// addNumbers(20, 30);
// addNumbers(20, '30');
// correct one using ts
function addNumbers(num1, num2) {
    console.log(num1 + num2);
}
addNumbers(20, 30);
// addNumbers(20, "30"); // it show error beacuse of type error
var num1 = 20;
console.log(num1);
// Part-2
// 1 number: Represents both integer and floating-point numbers.
var age = 25;
var price = 9.99;
//2 string: Represents a sequence of characters.
var name2 = 'John';
//3 boolean: Represents a true or false value.
var isDone = false;
//4 any: Represents a dynamic or untyped value. Avoid using this when possible, as it bypasses type checking. if you have no knowledge about the variable type use any type: user input values
var data = 42;
data = 'Hello';
var password;
var passwords;
// part-3  Data Types: User defined
// 1 union:
// let userId: string | number;
// userId=true;//error
function userIdDataType(userId) {
    console.log(typeof userId);
}
userIdDataType('123');
// userIdDataType(true) show errer
var isEven = function (num) {
    if (typeof num === 'number') {
        console.log(typeof num);
        return num % 2 === 0 ? 'even' : 'odd';
    }
    else {
        console.log(typeof num);
        return Number(num) % 2 === 0 ? 'even' : 'odd';
    }
};
console.log(isEven(32));
console.log(isEven('32'));
var users = [];
var user1 = { userName: 'anis', userId: 101 };
users.push(user1);
for (var key in users) {
    console.log(users[key]['userName']);
}
var numbers = [1, 2, 3, 4, 5];
numbers.push(8);
console.log(numbers);
var users3;
users3 = ["anis", "rabu", "pinky"];
users.sort();
console.log(users3);
users3.push("limon");
console.log(users3);
users3.pop();
console.log(users3);
users3.unshift('milton3');
console.log(users3);
users3.shift();
console.log(users3);
