class MultiplicationProblem {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }

  get display() {
    return this.displayProblem() + " = " + this.answer();
  }
  displayProblem() {
    return this.first + " x " + this.second;
  }

  answer() {
    return this.first * this.second;
  }
}
