export class HashTable {
  constructor() {
    this.table = new Array(127);
  }

  hashing(word) {
    const primeNumber = 5;
    let hashedNumber = 0;
    for (let letter in word) {
      const ascii = word[letter].charCodeAt() - 96;
      hashedNumber += primeNumber + ascii;
    }
    if (hashedNumber > this.table.length) {
      hashedNumber %= this.table.length;
    }
    return hashedNumber;
  }
}
