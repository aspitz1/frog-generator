// array of frog names
const frogType = ['Grumpy', 'Sticky', 'Dizzy', 'Fast', 'Melting', 'Shook', 'Love Struck', 'Mopey', 'Nerdy', 'Bumpy', 'Long', 'Thick', 'Intellectual', 'Grainy', 'Hypno', 'Slow', 'Granny', 'Crafty', 'Hamburger', 'Pie', 'Sparkle', 'Stump', 'Bumble', 'Chef', 'Sumo', 'Traveler'];

const form = document.querySelector('#form')
const output = document.querySelector('#frogName')
const button = document.querySelector('.rese')
// gathers input and matches it to array index value based on the first letter of the name
form.addEventListener('submit', function(event){
  event.preventDefault();
  const nameFirst = event.target[0].value[0].toUpperCase();
// frog name output
  output.textContent = `${frogType[nameFirst.charCodeAt(0) - 65]} Frog!`;
})
form.addEventListener('reset', function(event){
  output.textContent = '';
})
