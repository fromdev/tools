var debug = false;

var log = function(msg) {
  if (debug) {
    console.log(msg);

  }
};

var shuffle = function(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
};

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


var generateTitlesRandom = function(targets, topics,counts) {
  var titleArray = new Array();
  if(templates) {
    var step;
    var currentTitle;
    for (step = 0; step < 75; step++) {
      currentTitle = (' ' + templates[getRandomInt(0, templates.length - 1)]).slice(1);
      currentTitle = currentTitle.replace("TARGET", targets[getRandomInt(0, targets.length - 1)]);
      currentTitle = currentTitle.replace("TOPIC", topics[getRandomInt(0, topics.length - 1)]);
      currentTitle = currentTitle.replace("COUNT", counts[getRandomInt(0, counts.length - 1)]);
      titleArray.push(currentTitle);
      log(currentTitle);
    }
  }
  return titleArray;
};
