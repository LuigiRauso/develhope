class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // First name:
  get firstName() {
    return this._firstName;
  }

  set firstName(newFirstName) {
    this._firstName = newFirstName;
  }

  // Last name:
  get lastName() {
    return this._lastName;
  }

  set lastName(newLastName) {
    this._lastName = newLastName;
  }

  // Age:
  get age() {
    return this._age;
  }

  set age(newAge) {
    this._age = newAge;
  }

  // Full name:
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);