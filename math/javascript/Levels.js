var Levels = Levels || {};

Levels.ONE = {
  "id" : 1,
  "choicesGiven":6,
  "range" : {"start":0,"end":4},
  "points" : 5
};

Levels.NextLevel = function(prevLevel) {
  return (prevLevel) ? {
    "id" : prevLevel.id + 1,
    "choicesGiven":6,
    "range" : {"start":prevLevel.range.end,"end":prevLevel.range.end + 4},
    "points" : prevLevel.points + 1
  } : Levels.ONE;
};

Levels.CurrentLevel = {
  Instance : function() {
    return StorageUtils.getJSON("CURRENT_LEVEL");
  },
  initialize : function(level) {
    //default start with level one
    if(!level || !level.id) {
      level = Levels.ONE;
    }
    if(level) {
      if(!level.problems) {
        level.problems = ArrayUtils.shuffle(MultiplicationProblem.generateProblems(level.range));
      }
      var lvlStr = JSON.stringify(level);
      StorageUtils.setItem("CURRENT_LEVEL",lvlStr);
      $("#levelHeading").text(level.id);
      $(".answerChoice").show();
      $("#nextLevel").hide();
      showPoints();
      console.log('Level initialized ' + lvlStr);
    }
  },
  findNextProblem : function() {
     var level = CurrentLevel.Instance();
     if(level.problems.length > 0) {
       var problem = level.problems.last();
       return new MultiplicationProblem(problem.first, problem.second);
     }
  },
  moveProblemToEnd : function() {
    var level = CurrentLevel.Instance();
    if(level.problems.length > 0) {
      var problem = level.problems.pop();
      level.problems.unshift(problem);
      StorageUtils.setItem("CURRENT_LEVEL",JSON.stringify(level));
    }
  },
  removeLastProblem : function(problem) {
    var level = CurrentLevel.Instance();
    if(level.problems.length > 0) {
      level.problems.pop();
      StorageUtils.setItem("CURRENT_LEVEL",JSON.stringify(level));
    }
  }
};
