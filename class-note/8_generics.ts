// function logText(text) {
// 	console.log(text)
//   return text
// }

// logText(10)
// logText("jmpark")
// logText(true)

// function logText<T>(text: T): T {
//   console.log(text)
//   return text
// }

// logText<string>("jmpark")

function logText(text: string) {
  console.log(text);
  text.split(" ");
  return text;
}

function logNumber(text: number) {
  console.log(text);
  return text;
}

logText("a");
logNumber(24);

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<number> = { value: "abc", selected: false };

// 제네릭 타입 제한
function logTextLength<T>(text: T[]): T[] {
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}

logTextLength<string>(["hihi", "hihi", "hihi"]);

// 제네릭 타입 제한2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  return text;
}

logTextLength("a");
logTextLength({ length: 10 });
logTextLength([{ length: 10 }]);

// 제네릭 타입 제한3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption("name");
