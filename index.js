const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  const casedTutorials = tutorials.map(function(title){
    let casedTitle = '';
    let wasSpace = true; //starts true to capitalize first letter
    for ( let letter of title){
      if (letter === ' '){//checks if it's a space first
        wasSpace = true;
        casedTitle += letter;
      } else if (letter !== letter.toUpperCase() && wasSpace === true){
        //check for lowercase letters following spaces
        wasSpace = false;
        casedTitle += letter.toUpperCase();
      } else {
        //everything else is unchanged
        wasSpace = false;
        casedTitle += letter;
      }
      }
    return casedTitle;
  })
  return casedTutorials;
}
