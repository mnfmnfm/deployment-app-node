'use strict';

const express = require('express');

const app = express();

app.get('/', (req,res) => {
    const obj = { test: 'fail', v:2 };
    res.status(200).json(obj);
});

module.exports = {
    app,
    start: (port) => app.listen(port, console.log(`Up on Port ${port}`))
}
