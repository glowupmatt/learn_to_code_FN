// // String
// const greeting = "Hello, World!";
// console.log(greeting)
// let word = greeting + " " + 'Coding' 
// console.log(word)
// // String Literal
// const dis = 'lame'
// const dick = 'ass nigga'
// let literal = `Kyle: ${Text-body}` 
// console.log(literal)
// // Numbers
// const zero = 0
// let one = 1
// Boolean
const randomNumber = Math.floor(Math.random() * 100)
console.log(randomNumber)
const isRandomNumberEven = randomNumber % 2 === 0
console.log(isRandomNumberEven)

let isTheSkyBlue = true
let isTheWaterWet = false

// if(isRandomNumberEven) {
//   isTheSkyBlue = false
// } else {
//   isTheWaterWet = true
// }

let name;
let noun;

if(isRandomNumberEven){
  name = 'Kyle'
  console.log("========== NAME ==========")
  console.log(name)
  console.log("========== NAME ==========")
  noun = 'Bitch ass nigga'
  console.log("========== NOUN ==========")
  console.log(noun)
  console.log("========== NOUN ==========")
} else{
  name = "Matthew"
  noun = 'Bitch ass nigga'
}

const sentence = `${name} is a ${noun}!!!!!!!!`
console.log(sentence)