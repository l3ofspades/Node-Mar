/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    this.chains = {};

    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;

// always initialize array for word
      if (!this.chains[word]) {
        this.chains[word] = [];
      }
// add next word to array
      this.chains[word].push(nextWord);
    }
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    let keys = Object.keys(this.chains);

    // start with a random word
    let key = keys[Math.floor(Math.random() * keys.length)];
    let out = [];

    // build out text
    while (out.length < numWords && key !== null) {
      out.push(key);
      let nextWords = this.chains[key];
      key = nextWords[Math.floor(Math.random() * nextWords.length)];
    }

    return out.join(" ");
  }
}

module.exports = { MarkovMachine };
