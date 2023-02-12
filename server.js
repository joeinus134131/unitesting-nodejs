const express = require('express');
const bodyParser = require('body-parser');
const todoRouter = require('./app/todo/router')

const app = express();
const port = process.env.PORT || 4004;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/todos', todoRouter);
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;