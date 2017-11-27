class MultiplicationProblem {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }

  get display() {
    return this.displayProblem() + " = " + this.answer() + " choices " + this.choices().toString();
  }
  displayProblem() {
    return this.first + " x " + this.second;
  }

  answer() {
    return this.first * this.second;
  }

  choices() {
    const answ = this.answer();
    var choices = new Array();
    choices.push(answ);
    choices.push(answ + 10);
    choices.push(answ + 1);
    choices.push(answ + RandomUtils.getRandomInt(1,10));
    choices.push(RandomUtils.getRandomInt(1,answ));
    if(answ > 0) {
      choices.push(answ - 1);
    }
    if(answ > 10) {
      choices.push(answ - 10);
    }

    return choices;
  }
  static generateProblems(range) {
    var problems = new Array();
    if(range && range.start >= 0 && range.end >= range.start) {
      for(var i = range.start; i<range.end+1; i++) {
        for(var j = range.start; j<range.end+1; j++) {
            problems.push(new MultiplicationProblem(i,j));
        }
      }
    }
    return problems;
  }
}
