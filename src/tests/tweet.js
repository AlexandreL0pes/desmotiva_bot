const tweet = require('../services/tweet');

console.log(">> Desmotiva bot aqui! <<");

// Irá testar a cada 30 segundos
setInterval(tweet.testDemotivate, 1000 * 30);