var Levels = Levels || {};

Levels.ONE = {
  "id" : 1,
  "choicesGiven":6,
  "range" : {"start":0,"end":9},
  "points" : 5
};
Levels.TABLE = {
  "id" : "Table",
  "choicesGiven":6,
  "range" : {"start":0,"end":10},
  "points" : 5,
  "number" : 25
};
Levels.NextLevel = function(prevLevel) {
  return (prevLevel) ? {
    "id" : prevLevel.id + 1,
    "choicesGiven":6,
    "range" : {"start":prevLevel.range.end+1,"end":prevLevel.range.end + 10},
    "points" : prevLevel.points + 1
  } : Levels.ONE;
};

Levels.findLevel = function(id) {
  var tmpLevel = Levels.ONE;
  while(id && Number.isInteger(id) && id < 1000 && id > 0 && id > tmpLevel.id) {
    tmpLevel = Levels.NextLevel(tmpLevel)
  }
  return tmpLevel;
};

Levels.CurrentLevel = {
  Instance : function() {
    return StorageUtils.getJSON("CURRENT_LEVEL");
  },
  ALL_PROBLEMS : [],
  initAllProblems : function() {
    var allProblems = Levels.CurrentLevel.ALL_PROBLEMS;
    if(allProblems.length == 0) {
      var allProblemRangeEnd = 26;
      for(var i = 0; i < allProblemRangeEnd; i++) {
        for(var j = 0; j < allProblemRangeEnd; j++) {
          if(i < 2 || j < 2) {
            //for lower number put only 1 out of 5
            if(RandomUtils.getRandomInt(1,100) % 5 == 0) {
              allProblems.push(new MultiplicationProblem(i,j));
            }
          } else {
            allProblems.push(new MultiplicationProblem(i,j));
          }
        }
      }
    }
    return allProblems;
  },
  initTableProblems : function(level) {
    var tableProblems = [];
    if(Levels.TABLE === level) {
      for(var i = Levels.TABLE.range.start; i < Levels.TABLE.range.end;i++){
        tableProblems.push(new MultiplicationProblem(Levels.TABLE.number,i));
        tableProblems.push(new MultiplicationProblem(i,Levels.TABLE.number));
      }
    return tableProblems;
  },
  generateProblems : function(level) {
    var problems = new Array();
    if(level === Levels.TABLE) {
      return ArrayUtils.shuffle(initTableProblems());
    } else {
      var range = level.range;
      //Generate all problems if not already done
      var allProblems = initAllProblems();

      if(allProblems.length > range.end) {
        problems = problems.concat(allProblems.slice(range.start,range.end));
      }
      //Randomly add some problems from previous levels.
      if(range.start > 0 ) {
        var allProblemsFromPrevLevels = ArrayUtils.shuffle(allProblems.slice(0,range.start));
        //picking random 5 problems
        problems = problems.concat(allProblemsFromPrevLevels.slice(0,4));
      }
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
        level.problems = ArrayUtils.shuffle(Levels.CurrentLevel.generateProblems(level));
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
