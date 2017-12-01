var Levels = Levels || {};

var calculateNextLevel = function(prevLevel) {
  return {
    "id" : prevLevel.id + 1,
    "nextLevel": function(level) { return calculateNextLevel(level)},
    "choicesGiven":6,
    "range" : {"start":prevLevel.range.end,"end":prevLevel.range.end + 4},
    "points" : prevLevel.points + 1
  };
};
Levels.ONE = {
  "id" : 1,
  "nextLevel": function(level) { return calculateNextLevel(level)},
  "choicesGiven":6,
  "range" : {"start":0,"end":4},
  "points" : 5
};
