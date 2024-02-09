const express = require('express');
const app = express();

app.get('/testNode', (_req, res) => {
    res.status(200).send("yes the endpoint worked");
})

app.get('/', (req, res) => {
    res.status(200).send("welcome to the app");
})


module.exports = app;
