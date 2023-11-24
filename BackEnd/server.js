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
app.use(function (req, res, next) {
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
app.get('/api/books', async (req, res) => {
    let books = await bookModel.find({});
    res.json(books);

})

// getting-started.js
//connecting to the database
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

const bookModel = mongoose.model('books', BookSchema);

//adding a book to the database with a promise
app.post('/api/books', (req, res) => {

    // console.log(req.body.title);
    // console.log(req.body.authors);
    // console.log(req.body.cover);

    //create a book object to be passed to the axios (which is a promise based http client) call to get the data from the api
    bookModel.create({
        title: req.body.title,
        cover: req.body.cover,
        authors: req.body.authors
    })
        .then(() => { res.send('Book Created') })
        .catch(() => { res.send('Book Not Created') })

});

//finding a book by id
app.get('/api/books/:id', async (req, res) => {
    console.log(req.params.id);

    let book = await bookModel.findById({ _id: req.params.id });
    res.send(book);
})


//editing a book by id in databases when the edit form is submitted
app.put('/api/books/:id', async (req, res) => {
    console.log("Update: " + req.params.id);

    let book = await bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true },);
    res.send(book);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})