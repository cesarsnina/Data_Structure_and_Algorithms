import { HashTable } from "./HashTable.js";

const Test = () => {
  hashTable();
  // queue();
  // stack();
}

const hashTable = () => {
  const hashTable = new HashTable();
  console.log(hashTable.hashing('cat')); // 39
  console.log(hashTable.hashing('turtle')); // 126
  console.log(hashTable.hashing('goat')); // 63
  console.log(hashTable.hashing('frogs')); // 90
  console.log(hashTable.hashing('hamster')); // 119
  console.log(hashTable.hashing('butterflies')); // 192 % 127 = 65
}

const queue = () => {

}

const stack = () => {

}

Test();