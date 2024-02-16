const express = require('express');
const cors = require('cors');
const app = express();
const { add } = require("./arithmetica");
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!');
})

app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1) || 0;
    const num2 = parseFloat(req.query.num2) || 0;
    const sum = add(num1, num2);

    res.json({result:sum});
})

app.listen(port);