//npm init
// npm i cowsay
var cowsay = require("cowsay");
const Quote = require("inspirational-quotes");

const a = Quote.getRandomQuote(); // return any random quote
console.log(
  cowsay.say({
    text: a,
    e: "oO",
    T: "U ",
  })
);

// or cowsay.think()
