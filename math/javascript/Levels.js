var Levels = Levels || {};
Levels.TWO = {
  "id" : 2,
  "nextLevel":3,
  "choicesGiven":6,
  "range" : {"start":5,"end":9},
  "points" : 7
};
Levels.ONE = {
  "id" : 1,
  "nextLevel":Levels.TWO,
  "choicesGiven":6,
  "range" : {"start":0,"end":4},
  "points" : 5
};
