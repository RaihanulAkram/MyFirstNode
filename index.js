const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5050;

app.get('/', (req, res) => {
    res.send('Hello World I am exploring nodejs and expressjs');
});

const users = [
    { id: 0, name: "Shabana", email: "shabana@gmail.com", phone: "01788888888" },
    { id: 1, name: "Shabnoor", email: "Shabnoor@gmail.com", phone: "01788888888" },
    { id: 2, name: "Srabonty", email: "Srabonty@gmail.com", phone: "01788888888" },
    { id: 3, name: "Sochorita", email: "Sochorita@gmail.com", phone: "01788888888" },
    { id: 4, name: "Saniya", email: "Saniya@gmail.com", phone: "01788888888" },
    { id: 5, name: "Susmita", email: "Susmita@gmail.com", phone: "01788888888" }
];

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users);
    }
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser)); (Or)
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana', 'apple', 'painapple']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yammy yammy tok marka fazli');
});

app.listen(port, () => {
    console.log('listening to port', port);
});