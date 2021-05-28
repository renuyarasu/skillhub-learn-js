//ES7: Classes
/*
class human {
  constructor() {
    this.age = 30;
  }
  printAge() {
    console.log(this.age);
  }
}
class person extends human {
  constructor() {
    super();
    this.name = "VedaGna";
    this.age = 50;
  }
  printName() {
    console.log(this.name);
  }
}
const persons = new person();
persons.printName();
persons.printAge();
*/
class human {
  age = 30;
  printAge = () => console.log(this.age);
}
class person extends human {
  name = "VedaGna";
  age = 50;
  printName = () => console.log(this.name);
}

const persons = new person();
persons.printName();
persons.printAge();
