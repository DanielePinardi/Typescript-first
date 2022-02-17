"use strict";
let mike = {
    age: 25,
    name: 'mike',
    say: function () {
        return 'My name is ' + this.name + "and I'm " + this.age + 'years old';
    }
};
function sayIt(person) {
    return person.say();
}
const sayIt2 = ({ name, age }) => {
    console.log(name);
    console.log(age);
};
const getArray = () => {
    return [1, 2, 3, 4, 5];
};
const arr = getArray();
arr === null || arr === void 0 ? void 0 : arr.map(x => console.log(x));
sayIt2(mike);
