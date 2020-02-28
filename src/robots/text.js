const algorithmia = require("algorithmia");
const algorithmiaKey = require("../credentials/algorithmiaKey");
const algorithmiaClient = algorithmia.client(algorithmiaKey.value);

function robot(content) {
  fetchContentFromWikipedia(content);
  //sanitizeContent(content);
  //breakContentIntoSentences(content);

  function fetchContentFromWikipedia(content) {
    const wikipediaAlgorithm = algorithmiaClient.algo(
      "web/WikipediaParser/0.1.2"
    );

    wikipediaAlgorithm
      .pipe({
        articleName: content.searchTerm,
        lang: "pt"
      })
      .then(result => {
        console.log("wikipedia content", result);
      });
  }
}

module.exports = robot;
