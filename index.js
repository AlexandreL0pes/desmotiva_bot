console.log(">> Desmotiva bot aqui! <<");

const config = require("./config");

const Twit = require("twit");
const T = new Twit(config);

T.post('statuses/update', {status:'teste'}, (err, data, response) => {
  if (err) {
    console.error(err);
  }
});
