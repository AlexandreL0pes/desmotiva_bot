const tweet = require('../services/tweet');

console.log(">> DESMOTIVA BOT <<");
console.log(">>  FAKE TWEET TEST <<");
// Irá testar a cada 30 segundos
setInterval(tweet.testDemotivate, 1000 * 30);