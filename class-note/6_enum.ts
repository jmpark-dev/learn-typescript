enum Shoes {
  Nike = "나이키",
  Adidas = "아디다스",
}

let myShoes = Shoes.Nike;
console.log(myShoes);

// 예제
enum Answer {
  Yes = "Y",
  No = "N",
}
const askQuestion = (answer: Answer) => {
  if (answer === Answer.Yes) {
    console.log("정답");
  }
  if (answer === Answer.No) {
    console.log("오답");
  }
};
askQuestion(Answer.Yes);
// askQuestion("예스");
// askQuestion("y");
// askQuestion("Yes");
