const { readUserInput } = require("./components/SearchTerm");

function start() {
  const content = {};
  let { searchTerm, prefix } = readUserInput();
  content.searchTerm = searchTerm;
  content.prefix = prefix;
}

start();
