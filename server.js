// create a boilerplate server using express
const express = require('express');

const { json } = express;

const server = express();
const port = 3000;

server.use(json({ limit: '10MB' }));

// basic handling route
server.get('/', (req, res) => {
    res.send('Hello World!');
});

server.get('/ida', (req, res) => {
    const parameter1 = req.query.parameter;
    const parameter2 = req.query.parameter2;
    const params3 = req.query.teks;
    res.send(`Hello World! ${parameter1} ${parameter2} ${params3}`);
});

// HTTP status code
server.post('/api', (req, res) => {
    res.send(req.body.params);
    // res.status(200).send(req.body.params);
    // res.status(404).send(req.body.params);
    // res.status(404).json({
    //     message: req.body.params
    // });
});

// Using the meal db API
server.post('/api/meal', async (req, res) => {
    // await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata', {
    await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${req.body.params}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((res) => res.json())
        .then((data) => {
            res.send(data);
        });
    // POST request have to include request body
    // await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(req.body.params)
    // })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         res.send(data);
    //     });
});

server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:3000`);
});