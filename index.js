const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleUpperCase = function(tutorial)  {
  let newTutorial = []
  let newWords
  let words = tutorial.split(" ");
  for (const word of words) {
    newTutorial.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  console.log(newTutorial)
  newWords = newTutorial.join(' ')
  return newWords;
};

function titleCased() {
  const new_tutorials = tutorials.map(titleUpperCase);
  return new_tutorials;
}
