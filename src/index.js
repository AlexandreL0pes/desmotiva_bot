const tweet = require('../src/services/tweet');

console.log(">> Desmotiva bot aqui! <<");

setInterval(tweet.demotivate, 1000 * 60 * 60 * 24);