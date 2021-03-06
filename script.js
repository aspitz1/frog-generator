// array of frog names
const frogType = ['Grumpy', 'Sticky', 'Dizzy', 'Fast', 'Melting', 'Shook', 'Love Struck', 'Mopey', 'Nerdy', 'Bumpy', 'Long', 'Thick', 'Intellectual', 'Grainy', 'Hypno', 'Slow', 'Granny', 'Crafty', 'Hamburger', 'Pie', 'Sparkle', 'Stump', 'Bumble', 'Chef', 'Sumo', 'Traveler'];

const form = document.querySelector('#form');
const output = document.querySelector('#frogName');
const img = document.querySelector('#frogImg');
// gathers input and matches it to array index value based on the first letter of the name
form.addEventListener('submit', function(event){
  event.preventDefault();
// event.target is the form event.target at 0 is the imput
  const nameFirst = event.target[0].value[0].toUpperCase();
// frog name output
  const currentFrog = frogType[nameFirst.charCodeAt(0) - 65]
  if (currentFrog === undefined) {
  output.textContent = 'Only Letters Please';
} else {
  output.textContent = `${currentFrog} Frog!`;
}
// changes image and alt text
  img.src = `Frogs/${currentFrog.split(' ').join('-')}.jpg`;
  img.alt = `A ${currentFrog} Frog!`
})
// resets form
form.addEventListener('reset', function(event){
  output.textContent = '';
  img.src = 'Frogs/Base.jpg';
})
