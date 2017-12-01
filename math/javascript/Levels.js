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
