// Generate random password

const generatePassword = (alphabet, length) => {

  const MAX = alphabet.length;

  let password = '';

  for (let i = 0; i < length; i++) {

    const Index = Math.floor(Math.random() * MAX);
    password = password + alphabet[Index];

  }

  return password;
  
};

require('../Tests/password.js')(generatePassword);
