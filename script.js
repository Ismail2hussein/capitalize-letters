function makeCapital(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log(makeCapital("my name is ali")); // "My Name Is Ali"
console.log(makeCapital("fikrcamp Bootcamp")); // "Fikrcamp Bootcamp"
console.log(makeCapital("i live In Paris")); // "I Live In Paris"
