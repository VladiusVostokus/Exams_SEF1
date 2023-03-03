// Generate random password

const generatePassword = (alphabet, len) => {

  const passwordLen = alphabet.length - 1;

  let password = '';

  for (let i = 0; i < len; i++) {

    const index = Math.floor(Math.random() * passwordLen);
    password = password + alphabet[index];

  }

  return password;
  
};

require('../Tests/password.js')(generatePassword);
