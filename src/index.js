const { readUserInput } = require("./components/SearchTerm");
const robots = {
  userInput: require("./robots/user-input"),
  text: require("./robots/text")
};

function start() {
  const content = {};
  let { searchTerm, prefix } = readUserInput();
  content.searchTerm = searchTerm;
  content.prefix = prefix;
  robots.text(content);
}

start();
