const express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.send('<h1>Welcome to my Home-Page :)</h1>');
});

app.get('/about-me', (req,res) => {
    res.send('<h1>My name is Amit :)</h1>');
});

app.get('/contact-me', (req,res) => {
    res.send('<h1>My email id : amit@gmail</h1>');
});

app.get('/calculator', (req,res) => {
    res.sendFile(__dirname + '/calculator.html');
});

app.post('/calculator', (req,res) => {
    console.log(req.body)
    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);
    let sum = n1 + n2;
    console.log(`Sum of two numbers is: ${sum}`)
    res.send(`The sum of two number is ${sum}`)

})

app.listen(PORT, (req,res) => {
    console.log(`Listening at http://localhost:${PORT}`);
});

