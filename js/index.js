///iteration 1
const hacker1 = 'Bob';
console.log("The driver's name is " + hacker1);
const hacker2 = 'Sam';
console.log("The navigator's name is " + hacker2);
//iteration 2
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
//iteration 3
//3.1
let upperCaseDriver = '';
for (i = 0; i < hacker1.length; i++) {
  upperCaseDriver = upperCaseDriver + hacker1[i].toUpperCase() + " ";
}
console.log(upperCaseDriver.slice(0, upperCaseDriver.length-1));
//3.2
let reverse = '';
for (i = hacker2.length-1; i > -1; i--) {
  reverse += hacker2[i];
}
console.log(reverse);
//3.3
if (hacker1[0].toUpperCase() < hacker2[0].toUpperCase()) {
  console.log(`The driver's name goes first.`);
} else if (hacker1[0].toUpperCase() > hacker2[0].toUpperCase()) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//bonus 1


// bonus 2
const phrase = "A man, a plan, a canal, Panama!";
let phraseNoComma = '';
for (i = 0; i < phrase.length; i++) {
  if(phrase[i] != ' ' && phrase[i] != '?' && phrase[i] != '!' && phrase[i] != ',' && phrase[i] != '.') {
    phraseNoComma  += phrase[i].toLowerCase();
  }
}

let reverseBonus = '';
for (i = phraseNoComma.length-1; i > -1; i--) {
  
  reverseBonus += phraseNoComma[i];
}
if (phraseNoComma === reverseBonus) {
  console.log('This is a palindrome')
} else {
  console.log('This is not a palindrome')
}