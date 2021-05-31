function greet(str) {
  switch (str) {
    case 'en':
      console.log("Hi!");
      break;
    case 'fr':
      console.log('Salut!');
      break;
    case 'pt':
      console.log('Ola!');
      break;
    case 'de':
      console.log('Hallo!');
      break;
    case 'sv':
      console.log('Hej!');
      break;
    case 'af':
      console.log('Haai!');
      break;
  }
}

function extractLanguage(str) {
  return str.slice(0, 2);
}

function localGreet(string) {
  greet(extractLanguage(string));
}

localGreet('en_US.UTF-8');
localGreet('fr_CA.UTF-8');
