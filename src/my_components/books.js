import BookItem from "./bookItem";

function Books(props) {

    return props.myBooks.map(
        (book) => {
            // to display data to the screen from the book item component using  a map function
            return <BookItem myBooks={book} key={book._id}></BookItem>
        }
    );
}

export default Books;