import axios from 'axios';
import { useState } from 'react';



function Create() {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [cover, setCover] = useState('');
    // handles when the form is submitted with arrow function and log it to the console
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Title: " + title + ", Author: " + author, + ", Cover: " + cover);
        const book = {title: title, authors: author, cover: cover};
        axios.post('http://localhost:4000/api/books', book)
        .then()
        .catch();
    };
    return (
        // create compoentent that dislays to the main react app when called in app.js
        <div>
            <h2>Hello form the create component </h2>
            {/* form to add a book to the api */}
            <form onSubmit={handleSubmit}>
                {/* // add a book title to the api */}
                <div className="form-group">
                    <label>Edit Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                {/* // add a book author to the api */}
                <div className="form-group">
                    <label>Edit Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                {/* // add a book cover to the api */}
                <div className="form-group">
                    <label>Edit Book Cover: </label>
                    <textarea
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Book"></input>
                </div>
            </form>

        </div>
    );
}

export default Create;