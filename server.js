/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
const express = require('express');
const cors = require('cors');

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

// require and use "multer"...

const app = express();

app.use(cors());
app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', (req, res) => {
  res.sendFile(`${process.cwd()}/views/index.html`);
});

app.get('/hello', (req, res) => {
  res.json({ greetings: 'Hello, API' });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Node.js listening ...');
});
