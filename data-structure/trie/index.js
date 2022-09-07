class Node {
  constructor() {
    this.children = {}
    this.isTerminal = false
  }
}

class Trie {
  constructor() {
    this.root = new Node()
  }

  // inserts words recursively
  insertRecur(word, root = this.root) {
    if (!word.length) {
      root.isTerminal = true
      return
    }

    let letter = word[0]
    if (!(letter in root.children)) {
      root.children[letter] = new Node()
    }
    this.insertRecur(word.slice(1), root.children[letter])
  }

  // inserts words iteratively
  insertIter(word) {
    let letterIdx = 0
    let node = this.root

    while (letterIdx < word.length) {
      let letter = word[letterIdx]

      if (!(letter in node.children)) {
        node.children[letter] = new Node()
      }

      if (letterIdx === word.length - 1) {
        node.children[letter].isTerminal = true
      }

      node = node.children[letter]
      letterIdx++
    }
  }

  // searches if word exist in Trie recursively
  searchRecur(word, root = this.root) {
    if (word.length === 0) {
      if (root.isTerminal) return true
      return false
    }

    let letter = word[0]
    if (letter in root.children) {
      return this.searchRecur(word.slice(1), root.children[letter])
    }
    return false
  }

  // searches if word exist in Trie iteratively
  searchIter(word) {
    let letterIdx = 0
    let node = this.root

    while (letterIdx < word.length) {
      let letter = word[letterIdx]

      if (!(letter in node.children)) return false

      if (letterIdx === word.length - 1) {
        if (node.children[letter].isTerminal) return true
        return false
      }

      node = node.children[letter]
      letterIdx++
    }

    return true
  }

  // returns words in array that matches with given prefix
  wordsWithPrefix(prefix, root = this.root) {
    // check if there is strings in prefix - checkin...
    if (prefix.length) {
      let letter = prefix[0]
      if (letter in root.children) {
        let suffixes = this.wordsWithPrefix(
          prefix.slice(1),
          root.children[letter]
        )
        return suffixes.map((suffix) => letter + suffix)
      } else return []
    } else {
      let allWords = []
      if (root.isTerminal) allWords.push('')

      for (let letter in root.children) {
        let child = root.children[letter]
        let suffixes = this.wordsWithPrefix(prefix, child)
        let words = suffixes.map((suffix) => letter + suffix)
        allWords.push(...words)
      }
      return allWords
    }
  }
}

let trie = new Trie()
trie.insertIter('what is polling')
trie.insertIter('how to hack wifi')
trie.insertIter('how to reverse linked list')
trie.insertIter('how to optimize code')
trie.insertIter('what is defi')

console.log(trie)

t = performance.now()
console.log(trie.wordsWithPrefix('h'))
console.log(performance.now() - t)
