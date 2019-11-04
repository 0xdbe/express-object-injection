const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// An anonymous function as constructor
var user = function() {
  this.name = 'john';
};

// A vulnerable function
function handler(input) {
  console.log(input);
  user['anyVal'] = user[input[0]](input[1]);
  console.log(user);
}

// API Endpoint
app.post('/api/user', (req, res) => {
  return res.send(handler(req.body));
});

app.listen(3000, '0.0.0.0', () => console.log('app listening on 3000'));
