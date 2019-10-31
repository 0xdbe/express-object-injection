
var express = require('express');
var app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

// Un objet qui reste en mémoire
var user = function() {
  this.name = 'jon';
  //An empty user constructor.
};

// La fonction vulnérable
function handler(userInput) {
  console.log(JSON.stringify(userInput));
  var anyVal = 'anyVal'; // This can be any attribute, and does not need to be user controlled.
  user[anyVal] = user[userInput[0]](userInput[1]);
  console.log(user);
  return "howdy"
}

// Le point d'entrée de l'application
app.post('/api/user', (req, res) => {
  return res.send(handler(req.body));
});

app.listen(3000, '0.0.0.0', () => console.log('app listening on 3000'));
