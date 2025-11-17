var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age);
    };
    return Person;
}());
var person1 = new Person('John Doe', 30);
console.log(person1.getDetails());
var person2 = new Person('Alice', 25);
console.log(person2.getDetails());
