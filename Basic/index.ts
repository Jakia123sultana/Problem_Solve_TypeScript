// Part-1
// index.js
// without typescript
// function addNumbers(num1, num2) {
//   console.log(num1 + num2);
// }
// addNumbers(20, 30);
// addNumbers(20, '30');
// correct one using ts
function addNumbers(num1: number, num2:number) {
  console.log(num1 + num2);
}
addNumbers(20, 30);
// addNumbers(20, "30"); // it show error beacuse of type error
let num1 = 20;
console.log(num1);



// Part-2
// 1 number: Represents both integer and floating-point numbers.
let age: number = 25;
let price: number = 9.99;
//2 string: Represents a sequence of characters.
let name2: string = 'John';
//3 boolean: Represents a true or false value.
let isDone: boolean = false;
//4 any: Represents a dynamic or untyped value. Avoid using this when possible, as it bypasses type checking. if you have no knowledge about the variable type use any type: user input values
let data: any = 42;
data = 'Hello';
let password: any;
let passwords: any[];



// part-3  Data Types: User defined
// 1 union:
// let userId: string | number;
// userId=true;//error
function userIdDataType(userId:string | number){
    console.log(typeof userId)
}
userIdDataType('123');
// userIdDataType(true) show errer
const isEven = (num: number | string) => {
  if (typeof num === 'number') {
    console.log(typeof num);
    return num % 2 === 0 ? 'even' : 'odd';
  } else {
    console.log(typeof num);
    return Number(num) % 2 === 0 ? 'even' : 'odd';
  }
};
console.log(isEven(32));
console.log(isEven('32'));
// object: Represents any non-primitive value.
type User = { userName: string, userId: number }

let users: User[] = []

let user1: User = { userName: 'anis', userId: 101 }
users.push(user1)

for (const key in users) {
  console.log(users[key]['userName']);
}

let numbers: number[] = [1, 2, 3, 4, 5];
numbers.push(8)
console.log(numbers)

let users3: string[];
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

