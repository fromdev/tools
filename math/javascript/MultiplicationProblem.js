class MultiplicationProblem {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }

  get display() {
    return this.displayProblem() + " = " + this.answer() + " choices " + this.choices().toString();
  }
  get allChoices() {
    return this.choices();
  }
  displayProblem() {
    return this.first + " x " + this.second;
  }

  answer() {
    return this.first * this.second;
  }

  choices() {
    const answ = this.answer();
    var choices = new Set();
    choices.add(answ);
    choices.add(answ + 10);
    choices.add(answ + 1);
    choices.add(answ + RandomUtils.getRandomInt(1,10));
    //Ensure we have 6 choices
    while(choices.size < 6) {
      choices.add(RandomUtils.getRandomInt(1,answ))
    }
    return Array.from(choices);
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
