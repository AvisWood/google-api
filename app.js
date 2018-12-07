const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
// app.engine('pug',require('pug').__express)
app.set('view engine', 'pug');

app.get('/',(req, res)=> {
    res.render('maps.pug',{
        key: process.env.KEY,
    })
    app.use(express.static(__dirname + '/public'));
});
app.get('/url',(req, res) => {
    res.render('url.pug',{
        key: process.env.KEY,
    })
    app.use(express.static(__dirname + '/public'));
});

app.get('/youtube',(req, res)=> {
    res.render('youtube.pug',{
        key: process.env.KEY,
    })
    app.use(express.static(__dirname + '/public'));
})

app.listen(3000);
