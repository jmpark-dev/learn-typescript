interface User {
  age: number;
  name: string;
}

const seho: User = {
  age: 33,
  name: "seho",
};

const getUser = (user: User) => {
  console.log(user);
};

const capt = {
  name: "캡틴",
  age: 20,
};

getUser(capt);

interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱 패턴
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ["1", "2", "3"];
arr[0] = "10";

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

Object.keys(obj).forEach(function (value) {});

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

let captain: Developer = {
  name: "jmpark",
  age: 29,
  language: "TS",
};
