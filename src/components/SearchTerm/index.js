const readline = require("readline-sync");

function readUserInput() {
  const content = {};
  content.searchTerm = askAndReturnSearchTerm();
  content.prefix = askAndReturnPrefix();
  return content;
}

function askAndReturnSearchTerm() {
  return readline.question("Type a Wikipedia search term: ");
}

function askAndReturnPrefix() {
  const prefixes = ["Who is", "What is", "The history of"];
  const selectedPrefixIndex = readline.keyInSelect(
    prefixes,
    "Tell me, what about do you wanna know?"
  );
  return prefixes[selectedPrefixIndex];
}

module.exports = {
  readUserInput
};
