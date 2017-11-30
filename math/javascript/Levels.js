var Levels = Levels || {};
Levels.THREE = {
  "id" : 3,
  "nextLevel":3,
  "choicesGiven":6,
  "range" : {"start":5,"end":9},
  "points" : 7
};
Levels.TWO = {
  "id" : 2,
  "nextLevel":Levels.THREE,
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
//1 = 0 - 4
//2 = 4 - 6
//3 = 7 - 9
Levels.ALL = [];
var prevLevel;
var start = 0;
var end = 0;
for(int i = 26; i > 1; i++) {
  end = start + 4;
  var tmpLevel = {
    "id" : i,
    "nextLevel": prevLevel,
    "choicesGiven":6,
    "range" : {"start":start-2,"end":end},
    "points" : 3 * i
  };
  Levels.ALL.push(tmpLevel);
  prevLevel = tmpLevel;
  start = end;
}
