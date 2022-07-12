function Person1(name, age) {
  this.name = name;
  this.age = age;
}

let jm = new Person1("jm", 120);

jm;

class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log("생성");
    this.name = name;
    this.age = age;
  }
}

let jmpark = new Person("jmpark", 30);

console.log(jmpark);

let user = { name: "jmpark", age: 120 };

let admin = {};

admin.__proto__ = user;
admin.name;
admin.age;
admin.role = "admin";
admin;

let obj = { a: 10 };
Object.keys(obj);
obj;
