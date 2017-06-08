var opinions = ["This is the best job ever",
  "Satisfied",
  "At least I get paid",
  "I'm looking for another job",
  "I don't want to answer",
  "Fuck this shit i'm about to quit"
];

var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
  "Dudley Dursley", "30 June", "Tom Riddle", "31 December"
];
//iteration 1
function getRandomOpinion() {
  var arr = [];
  var arr2 = new Array(5);
  _.times(10, function () {
    arr.push(_.sample(opinions));
  });
  _.times(5, _.fill(arr2, arr));
  return arr2;
}
console.log(getRandomOpinion());

function oneToTwo() {
  return _.concat(_.chunk(birthdays, 2), _.chunk(moreBirthdays, 2));
}
console.log(oneToTwo());
//iteration 3
var goodPsswd = "1234567890";
var badPsswd = "1123456";

function noRepeatChar(password) {
  var length = password.length;
  var arr = _.split(password, '', length);
  if (length === _.uniq(arr).length) {
    return "the password has no repetiotions";
  } else {
    return "password has repeting chars dude";
  }
}
console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";

function onlyNumbers(password) {
  var length = password.length;
  var arr = _.split(password, '', length);
  var newArr = _.map(arr, _.toNumber);
  console.log(newArr);
  if (_.indexOf(newArr, NaN) > -1) {
    return "password contains characters other than digits";
  } else {
    return "all good bro";
  }
}
console.log(onlyNumbers(goodPsswd));
console.log(onlyNumbers(badPsswd));

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";

function trimPassword(password) {
  var length = password.length;
  var arr = _.split(password, '', length);
  var trimmedArr = _.dropRight(arr, length - 10);
  return _.join(_.map(trimmedArr, _.toNumber), '');
}
console.log(trimPassword(badPsswd));
//iteration 4
function novemberArtists () {
var month11 =  _.filter(abbeyRoadRecords, {month: 11});
var sorted = _.countBy(month11, 'artist');
var maxKey = 0;
var artist;
for (var key in sorted) {
  maxkey = sorted[key];
  if (maxKey < sorted[key]) {
    maxKey = sorted[key];
    artist = key;
  }
}
return "Artist who recorded the most on November: " + artist;
}

var bestArtist = function () {
  var sorted = _.countBy(abbeyRoadRecords, 'artist');
  var maxKey = 0;
  var mostRecorded;
  // console.log(sorted);
  _.keys(sorted).forEach(function (key) {
    if (maxKey <= sorted[key]) {
      maxKey = sorted[key];
      mostRecorded = key;
    }
});
  return "Artist who recorded the most times: " + mostRecorded;
};

var lastBeatlesSong = function () {
  var maostRecent = 0;
  var theBeatles = _.filter(abbeyRoadRecords, {artist: 'The Beatles'});
   theBeatles.forEach(function(obj){
     _.keys(obj).forEach(function(key){
       if (key === 'year' && maostRecent < obj[key]) {
         mostRecent = obj[key];
       }
     });
   });
  return "The most recent Beatles sont came out in " + mostRecent;
};

var sixtiesSong = function () {
  var year1960 = _.pickBy(abbeyRoadRecords, {year:1960});
  var lastSong = _.findLast(year1960);
  return "The last song recorded in 60s was \'" + lastSong.song + "\' by " + lastSong.artist ;
};


console.log(novemberArtists());
console.log(bestArtist());
console.log(lastBeatlesSong());
console.log(sixtiesSong());
