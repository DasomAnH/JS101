function tipAmount(bill, service) {
  if (service == 'good') {
    console.log(bill * 0.2 + bill);
  }
  if (service == 'fair') {
    console.log(bill * 0.2 + bill);
  }
  if (service == 'bad') {
    console.log(bill * 0.25 + bill);
  }
}

tipAmount(100, 'good');
