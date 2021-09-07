var securePassword = function(length) {
      var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      var retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
};
var isLucky = function() {
  return Math.floor(Math.random() * 100)%2==0;
};

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var ensureMinLength = function(inputString) {
  var minLength = 10;
  if(inputString.length < minLength) {
    var randomString = securePassword(minLength - inputString.length);
    if(isLucky()){
      inputString = inputString + randomString;
    } else {
      inputString = randomString + inputString;
    }
  }
  return inputString;
};

var securePasswordFromInputString = function(inputString){
  const result = {};
  if(inputString) {
    inputString = inputString.replace(/\s/g, "");
    result.randomReplaceResult = randomReplace(inputString);
    inputString = result.randomReplaceResult.charArray;
    inputString = ensureMinLength(inputString);
  }
  result.suggestion = inputString;
  return result;
};

var scorePassword = function(pass) {
    var score = 0;
    if (!pass)
        return score;

    // award every unique letter until 5 repetitions
    var letters = new Object();
    for (var i=0; i<pass.length; i++) {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
    }

    // bonus points for mixing it up
    var variations = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass),
    }

    variationCount = 0;
    for (var check in variations) {
        variationCount += (variations[check] == true) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;

    return parseInt(score);
};

var checkPassStrength = function (pass) {
    var score = scorePassword(pass);
    if (score > 80)
        return "<span class='label label-success'> Strong </span>";
    if (score > 60)
        return "<span class='label label-warning'> Good </span>";
    if (score >= 30)
        return "<span class='label label-danger'> Weak </span>";

    return "";
};
var memorableCharMap = new Map();
memorableCharMap.set("a",["a","A","@","4"]);
memorableCharMap.set("b",["b","B","6","8"]);
memorableCharMap.set("c",["c","C"]);
memorableCharMap.set("d",["d","D"]);
memorableCharMap.set("e",["e","E","3"]);
memorableCharMap.set("f",["f","F"]);
memorableCharMap.set("g",["g","G"]);
memorableCharMap.set("h",["h","H","#"]);
memorableCharMap.set("i",["i","I","1","!"]);
memorableCharMap.set("j",["j","J"]);
memorableCharMap.set("k",["k","K"]);
memorableCharMap.set("l",["l","L"]);
memorableCharMap.set("m",["m","M","w","W"]);
memorableCharMap.set("n",["n","N"]);
memorableCharMap.set("o",["o","O","0","."]);
memorableCharMap.set("p",["p","P"]);
memorableCharMap.set("q",["q","Q","0","9"]);
memorableCharMap.set("r",["r","R"]);
memorableCharMap.set("s",["s","S","5","$"]);
memorableCharMap.set("t",["t","T","7"]);
memorableCharMap.set("u",["u","U"]);
memorableCharMap.set("v",["v","V","<",">"]);
memorableCharMap.set("w",["w","W","m","M"]);
memorableCharMap.set("x",["x","X","*"]);
memorableCharMap.set("y",["y","Y"]);
memorableCharMap.set("z",["z","Z","2"]);
memorableCharMap.set("0",["o","O","0","."]);
memorableCharMap.set("i",["i","I","1","!"]);
memorableCharMap.set("z",["z","Z","2"]);
memorableCharMap.set("e",["e","E","3"]);
memorableCharMap.set("4",["a","A","@","4"]);
memorableCharMap.set("s",["s","S","5","$"]);
memorableCharMap.set("8",["b","B","6","8"]);
memorableCharMap.set("t",["t","T","7"]);
memorableCharMap.set("b",["b","B","6","8"]);
memorableCharMap.set("q",["q","Q","0","9"]);
var getRandomCharFromMap = function(inputchar) {
    var arr = memorableCharMap.get(inputchar);
    if(arr) {
      var newChar = arr[getRandomInt(0,arr.length-1)];
      if(newChar) {
        return newChar;
      }
    }
    return inputchar;
};

var randomReplace = function(inputString) {
  const result = {};
  var charArray = inputString.split('');
  result.requestLevelCharMappings = new Map();
  let chountChanged = 0;
  for (i = 0; i < charArray.length; i++){
    let toChar = result.requestLevelCharMappings.get(charArray[i]);
    if(!toChar) {
      toChar = (chountChanged > 2) ? charArray[i] : getRandomCharFromMap(charArray[i]);
      result.requestLevelCharMappings.set(charArray[i], toChar);
    }
    if(toChar !== charArray[i]) {
      chountChanged++;
    }
    charArray[i] = toChar;
  }
  result.charArray = charArray.join("");
  return result;
}
