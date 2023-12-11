const express = require('express');
const router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req,res)
  res.send(req);
});

module.exports = router;
