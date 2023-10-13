import { CardBody, CardImg, CardTitle } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// function to represent a single book item
function BookItem(props) {

    return (
        // create a card to display the data to the screen
            <Card style={{ width: '18rem' }}>   
            <CardBody>
            {/* this is to display data to the screen */}
            {console.log(props.myBooks.title)}
            <CardTitle> Title: {props.myBooks.title}</CardTitle> 
            <CardTitle>Authors: {props.myBooks.authors}</CardTitle>
            <Card.Img  variant = "top" src={props.myBooks.thumbnailUrl}></Card.Img>
            </CardBody>
        </Card>
    );
}

export default BookItem;