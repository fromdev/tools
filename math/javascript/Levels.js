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
  ALL_PROBLEMS : [],
  generateProblems : function(range) {
    //Generate all problems if not already done
    var allProblems = Levels.CurrentLevel.ALL_PROBLEMS;
    if(allProblems.length == 0) {
      var allProblemRangeEnd = 26;
      for(var i = 0; i < allProblemRangeEnd; i++) {
        for(var j = 0; j < allProblemRangeEnd; j++) {
            allProblems.push(new MultiplicationProblem(i,j));
        }
      }
    }
    var problems = new Array();
    if(allProblems.length > range.end) {
      problems = problems.concat(allProblems.slice(range.start,range.end));
    }
    //Randomly add some problems from previous levels.
    if(range.start > 0 ) {
      var allProblemsFromPrevLevels = ArrayUtils.shuffle(allProblems.slice(0,range.start));
      //picking random 10 problems
      problems = problems.concat(allProblemsFromPrevLevels.slice(0,9));
    }

    return problems;
  },
  initialize : function(level) {
    //default start with level one
    if(!level || !level.id) {
      level = Levels.ONE;
    }
    if(level) {
      if(!level.problems) {
        level.problems = ArrayUtils.shuffle(Levels.CurrentLevel.generateProblems(level.range));
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
