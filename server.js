const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
app.use(express.json());
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log(`App is listening on port ${app.get('port')}`);
});
app.get('/', (req, res)=> {
  res.send('Let us get started!');
});