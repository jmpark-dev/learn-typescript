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
