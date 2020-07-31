const tweet = require('../services/tweet');

console.log(">> Desmotiva bot aqui! <<");

setInterval(tweet.testDemotivate, 1000 * 60 * 60 * 24);