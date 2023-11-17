const express = require('express')
const app = express()
const port = 4000
//adding body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//adddig cors
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying!')
})

//route with api
app.get('/api/books', (req, res) => {
    const data = [{ "title": "Learn Git in a Month of Lunches", "isbn": "1617292419", "pageCount": 0, "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg", "status": "MEAP", "authors": ["Rick Umali"], "categories": [] }, { "title": "MongoDB in Action, Second Edition", "isbn": "1617291609", "pageCount": 0, "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg", "status": "MEAP", "authors": ["Kyle Banker", "Peter Bakkum", "Tim Hawkins", "Shaun Verch", "Douglas Garrett"], "categories": [] }, { "title": "Getting MEAN with Mongo, Express, Angular, and Node", "isbn": "1617292036", "pageCount": 0, "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg", "status": "MEAP", "authors": ["Simon Holmes"], "categories": [] }];
    res.json({mybooks:data});

})

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.8c7ngnf.mongodb.net/?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//schema for book
const BookSchema = new mongoose.Schema({
    title: String,
    cover: String,
    authors: String
  });



//route with post
app.post('/api/books', (req, res) => {

    console.log(req.body.title);
    console.log(req.body.authors);
    console.log(req.body.cover);
    
    res.send('Book added');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})