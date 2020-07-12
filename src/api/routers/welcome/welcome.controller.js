const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  // https://www.caranddriver.com/rolls-royce/phantom
  const payload = {
    title: 'You need a Phantom.',
    description:
      "The Rolls-Royce Phantom is not just an ultimate status symbol, it's the Holy Grail of handcrafted luxury automobiles.",
  };
  res.render('welcome', payload);
});

router.get('/login', (req, res) => {
  const payload = {
    title: 'Log In',
  };
  res.render('login', payload);
});

router.get('/register', (req, res) => {
  const payload = {
    title: 'Register',
  };
  res.render('register', payload);
});

module.exports = router;
