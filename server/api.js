const api = module.exports = require('express').Router()
const users = require('./users');
const shares = require('./shares');
// import users from './users';
api
  .get('/express-test', (req, res) => res.send({express: 'working!'})) //demo route to prove api is working
  .use('/users', users)
  .use('/shares', shares)
// No routes matched? 404.
api.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
})
