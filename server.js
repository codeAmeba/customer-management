const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
    {
      id: 1,
      image: 'https://placeimg.com/150/150/1',
      name: 'Sooyoung Jeong',
      birthday: '880407',
      gender: 'm',
      job: 'developer',
    },
    {
      id: 2,
      image: 'https://placeimg.com/150/150/2',
      name: 'Linda G',
      birthday: '930825',
      gender: 'f',
      job: 'designer',
    },
    {
      id: 3,
      image: 'https://placeimg.com/150/150/3',
      name: 'Allan',
      birthday: '910213',
      gender: 'm',
      job: 'marketer',
    },
    {
      id: 4,
      image: 'https://placeimg.com/150/150/4',
      name: 'John',
      birthday: '940730',
      gender: 'm',
      job: 'developer',
    },
    {
      id: 5,
      image: 'https://placeimg.com/150/150/5',
      name: 'Kasey',
      birthday: '851105',
      gender: 'f',
      job: 'designer',
    },
    {
      id: 6,
      image: 'https://placeimg.com/150/150/6',
      name: 'Anderson',
      birthday: '960613',
      gender: 'm',
      job: 'marketer',
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
