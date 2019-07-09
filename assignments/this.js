/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding: when in the global scope, the value of 'this' will be the window object

* 2. Implicit binding, when an object is the context for `this` keyword.It implies that if using a method on the object
        that the context ones wants is bound to whatever is located left of the dot operator.

* 3. New Binding: whenever a construction function is used the `this` refers to the specific instance of the object
         that is created and returned by the constructor function

* 4. Explicit binding: whenever a Javascript methods .call(), .apply() or .bind()  are used the `this` is explicitly defined
*
* write out a code example of each explanation above
*/

console.log(`Principle 1`);
console.log(`code example for Window Binding`);
function dogsBark(sound) {
    console.log(this);
    return sound;
}
console.log(dogsBark("Woof, woof!"));
   
console.log(`--------------------------`);


console.log(`Principle 2`);
console.log(`code example for Implicit Binding`);

const person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
        console.log(this);
        return `My full name is ${this.firstName} ${this.lastName}`;
    }
}
console.log(person.getFullName());

console.log(`--------------------------`);


console.log(`Principle 3`);

console.log(`code example for New Binding`);
function Introduction(firstName, lastName, location) {
    this.greeting = 'Hi!'
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
    this.speak = function() {
        console.log(this);
        console.log(this.greeting + ' ' + this.firstName + ' ' + this.lastName + ' ' + 'from' + ' ' + this.location);
    };
}
const person1 = new Introduction('John', 'Doe', 'New-York');
const person2 = new Introduction ('Jane', 'Smith', 'D.C.');

person1.speak();
person2.speak();

console.log(`--------------------------`);

console.log(`Principle 4`);
console.log(`code example for Explicit Binding`);

person1.speak.call(person2);
person2.speak.apply(person1);

