class MultiplicationProblem {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }

  get display() {
    return this.displayProblem() + " = " + this.answer();
  }
  get displayProblem() {
    return this.first + " x " + this.second;
  }

  get answer() {
    return this.first * this.second;
  }
}
