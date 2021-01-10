const names = ['dasom', 'atom', 'rob', 'angi', 'JJ'];

function whosPaying(names) {
  let numberOfPeople = names.length;
  let randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  let lunch = names[randomPersonPosition];

  console.log(`${lunch} is going to buy lunch today.`);
}

whosPaying(names);
