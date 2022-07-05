// const logMessage = (value: any) => {
//   console.log(value);
// };

// logMessage("hi");
// logMessage(10);

let sehoo: string | number | boolean;

const logMessage = (value: string | number) => {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
};

logMessage("hi");
logMessage(10);

interface Developer {
  name: string;
  skill: string;
}
interface Person1 {
  name: string;
  age: number;
}

const askSomeone = (someone: Developer | Person1) => {
  someone.name;
  // someone.skill;
  // someone.age;
  // 타입 가드 활용해야함
};
askSomeone({ name: "디벨로퍼", skill: "웹개발" });
askSomeone({ name: "캡틴", age: 100 });

let jm: string | number | boolean;
let jmpark: string & number & boolean;

// 인터섹션 활용
const askSomeone1 = (someone: Developer & Person1) => {
  someone.name;
  someone.skill;
  someone.age;
};
askSomeone1({ name: "디벨로퍼", skill: "웹개발", age: 100 });
