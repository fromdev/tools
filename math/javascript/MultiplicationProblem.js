class MultiplicationProblem {
  constructor(first, second, choicesSize) {
    this.first = first;
    this.second = second;
    if(choicesSize) {
      this.choicesSize = choicesSize;
    }
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
    var choicesRange = (answ > 100) ? answ : 100;
    while(choices.size < 6) {
      choices.add(RandomUtils.getRandomInt(1,choicesRange));
    }
    this.choicesSize
    var arChoices = Array.from(choices);
    return (this.choicesSize) ? arChoices.splice(0,this.choicesSize-1) : arChoices;
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
