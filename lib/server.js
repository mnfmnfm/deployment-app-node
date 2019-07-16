'use strict';

const express = require('express');

const app = express();

app.get('/', (req,res) => {
  const obj = { test: 'pass', v:3 };
  res.status(500).json(obj);
});

module.exports = {
  app,
  start: (port) => app.listen(port, console.log(`Up on Port ${port}`))
};
