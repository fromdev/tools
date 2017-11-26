class MultiplicationProblem {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }

  get answer() {
    return this.first * this.second;
  }
}
