class Person {
  private name: string;
  readonly age: number;
  public log: string;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age
  }
}

// 리액트 예전 문법
class App extends React.Component {}

// 리액트 최신 문법
function App() {
  return ()
}