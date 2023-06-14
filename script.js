function makeid(l){
	const string = 'abcdefghijklmnopqrstuvwxyzzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let resultString = '';
  for(let i = 0; i < l; i++){
    const randomIndex = Math.floor(Math.random() * string.length);
    resultString += string[randomIndex];
  }
  return resultString;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
