// Closures & Modules - practice. Each module keeps its data private in a closure.

// Exercise 1: capitalizeFirst + toSkewerCase
const StringFormatter = function () {
  const capitalizeFirst = function (str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  };
  const toSkewerCase = function (str) {
    return str.split(" ").join("-");
  };
  return { capitalizeFirst, toSkewerCase };
};

const formatter = StringFormatter();
console.log(formatter.capitalizeFirst("dorothy")); // Dorothy
console.log(formatter.toSkewerCase("blue box")); // blue-box

// Exercise 2: money is private; public names come from the returned object
const Bank = function () {
  let money = 500; // private
  const deposit = function (cash) {
    money += cash;
  };
  const showBalance = function () {
    console.log(money);
  };
  return { deposit, showBalance };
};

const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance(); // 950

// Exercise 3: store only the video id, rebuild the full url on getSong
const SongsManager = function () {
  const songs = {}; // name -> video id
  const BASE_URL = "https://www.youtube.com/watch?v=";
  const addSong = function (name, url) {
    songs[name] = url.split("v=")[1];
  };
  const getSong = function (name) {
    return BASE_URL + songs[name];
  };
  return { addSong, getSong };
};

const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

console.log(songsManager.getSong("sax")); // https://www.youtube.com/watch?v=3JZ4pnNtyxQ
