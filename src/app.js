require('express-async-errors');
const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const api= require('./routes/index')
const errorHandler=require('./middlewares/error-handler')
const NotFoundError=require('./errors/not-found-error')



const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/v1', api);


// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
// });
// app.use((err, req, res) => {
//   return res.json({err: err})
// })

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler)


module.exports = app;