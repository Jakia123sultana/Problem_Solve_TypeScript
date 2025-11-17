type User = {
    name: string;
    age: number;
}

interface IUser {
  name: string;
  age: number;
}

type Role = {
    role: "admin" | "user";
}
interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

type UserWithRole = User & Role;

const user1:UserWithRole={
    name: "Mr.X",
    age:100,
    role:"admin"
    
}
const user2: User={
    name:"Mr. Y",
    age: 102
}
const user3: IUserWithRole = {
  name: "Mr.Z",
  age: 10,
  role: "admin",
};

type Add = (num1: number, num2:number)=>number;
const add:Add=(num1,num2)=> num1 + num2;
console.log(add(10,20))

interface IAdd {
  (num1: number, num2: number): number;
}

const add2: IAdd = (num1, num2) => num1 + num2;
console.log(add2(3,4))
console.log(user1,user2,user3)
