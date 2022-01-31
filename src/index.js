import * as lib from './math-lib.js';
import express from 'express';

const app = express();

app.get('/api/sum', (req, res) => {
  const a = +req.query['a'];
  const b = +req.query['b'];
  return res.json(lib.sum(a, b));
});

app.get('/api/subtract', (req, res) => {
  const a = +req.query['a'];
  const b = +req.query['b'];
  return res.json(lib.subtract(a, b));
});

app.get('/api/multiply', (req, res) => {
  const a = +req.query['a'];
  const b = +req.query['b'];
  return res.json(lib.multiply(a, b));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is now listening on ${port}`);
});
