const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

let users = require('./users.json');

app.use(express.static("public"));
app.use(morgan('dev'));

// Mengatur view engine ejs
app.set('view engine', 'ejs');

// Route Home page
app.get('/', (req, res) => {
    res.render('index');
});

// Route Game page
app.get('/game', (req, res) => {
    res.render('game');
});

// Get Data Users
app.get('/api/v1/users', (req, res) => {
    res.status(200).json(users);
});

// Get Specific Data User
app.get('/api/v1/users/:id', (req, res) => {
    const user = users.find(i => i.id === +req.params.id);
    
    if(user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({
            'status': 404,
            'message': 'User not found'
        });
    }

});

// Handle error API
app.get('/api/v1/*', (req, res) => {
    res.status(404).json({
        'status': 404,
        'message': "Data Not found"
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});