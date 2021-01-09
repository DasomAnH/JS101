function tipAmount(service) {
  if (service == 'good') {
    console.log('20%');
  } else if (service == 'fair') {
    console.log('15%');
  } else if (service === 'bad') {
    console.log('10%');
  } else {
    console.log('hmm...');
  }
}
tipAmount('');
tipAmount('good');
tipAmount('fair');
tipAmount('bad');
