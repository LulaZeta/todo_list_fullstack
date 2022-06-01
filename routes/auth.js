const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  res.send('auth routh working');
});

module.exports = router;
