import BookItem from "./bookItem";

function Books(props) {

    return props.myBooks.map(
        (book) => {
            // to display data to the screen from the book item component
            return <BookItem myBooks={book}></BookItem>
        }
    );
}

export default Books;