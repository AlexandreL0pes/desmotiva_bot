const tweet = require("../services/tweet");

console.log(">> DESMOTIVA BOT <<");
console.log(">> FAST TWEET TEST <<");
setInterval(tweet.demotivate, 1000 * 60);
