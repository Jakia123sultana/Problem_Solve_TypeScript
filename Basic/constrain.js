var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addStudentToCourse = function (studentInfo) {
    return __assign({ course: "Next Level" }, studentInfo);
};
var student1 = {
    id: 123,
    name: "Mezba",
    hasPen: true,
};
var student2 = {
    id: 321,
    name: "Jhankar Mahbub",
    hasCar: true,
    isMarried: true,
};
var student3 = {
    id: 444,
    name: "Abdur Rakib",
    hasWatch: true,
    dateOfBirth: "20-20-2020",
    class: "1",
};
var result = addStudentToCourse(student1);
console.log(result);
