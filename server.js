const express = require('express');
const app = express();
const port = 3000

const fruits = require('./models/fruits.js');
// set up middleware


//Index route = show all
//New - get a form to create
app.get('/fruits/new', (req,res) => {
    res.render('New')
})
//Delete
//Update - modifying a record
//Create
app.post('/fruits', (req,res) => {
    res.send('hi')
})
//Edit - Go to database and get the recod to update
//show route = SHOW ME A PARTICULAR RECORD is a get command
// app.get('/fruits/:indexOfFruitsArray', (req, res) => {
//     res.send(fruits[req.params.indexOfFruitsArray]);
// });

  

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// app.get('/fruits/', (req, res) => {
//     // res.send(fruits);
//     // res.render('Show');
// })
app.get('/fruits/', function(req, res){
    res.render('Index', { fruits: fruits });
});        

app.get('/fruits/:indexOfFruitsArray', function(req, res){
    res.render('Show', { //second param must be an object
        fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
});  
app.listen(3000, () => {
    console.log('listening')
})
