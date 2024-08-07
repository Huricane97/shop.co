const fs = require('fs');

const data = JSON.parse(fs.readFileSync("./data.json", 'utf-8'));

exports.getUsers = (req, res) => {
    res.json(data.users);
  
};


exports.singleUser = (req, res) => {
    const user = data.users.find(p => p.id === parseInt(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('user not found');
    }
};