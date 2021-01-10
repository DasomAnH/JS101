function tipAmount(bill, service, guests) {
  if (service == 'good') {
    console.log((bill * 0.2 + bill) / guests);
  }
  if (service == 'fair') {
    console.log((bill * 0.2 + bill) / guests);
  }
  if (service == 'bad') {
    console.log((bill * 0.25 + bill) / guests);
  }
}

tipAmount(100, 'good', 3);
