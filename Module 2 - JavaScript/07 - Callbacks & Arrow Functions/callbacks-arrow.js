// Exercise 1 - Callbacks
const push = function () {
  console.log("pushing it!")
}

const pull = function () {
  console.log("pulling it!")
}

const pushPull = function (func) {
  func()
}

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"


// Exercise 2 - Callbacks
const returnTime = function (time) {
  console.log('The current time is: ' + time)
}

const getTime = function (func) {
  const time = new Date()
  func(time)
}

getTime(returnTime)


// Exercise 3 - Callbacks
// The code broke because logData was never created (ReferenceError: logData is not defined).
// We only add the missing function - a callback that logs the data it gets.
const logData = function (data) {
  console.log(data)
}

const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

displayData(console.error, logData, "I like to party")


// Exercise 4 - Arrow Functions
const sum = (a, b, c) => a + b + c

console.log(sum(1, 2, 3)) // 6


// Exercise 5 - Arrow Functions
const capitalize = str => str[0].toUpperCase() + str.slice(1).toLowerCase()

console.log(capitalize("bOb"))      // Bob
console.log(capitalize("TAYLOR"))   // Taylor
console.log(capitalize("feliSHIA")) // Felishia


// Exercise 6 - Arrow Functions
const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}

const commentOnWeather = temp => "It's " + determineWeather(temp)

console.log(commentOnWeather(30)) //returns "It's hot"
console.log(commentOnWeather(22)) //returns "It's cold"
