// Purpose: To display the books that are read using the usestate hook and axios to get the data from the api
import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

function Read() {

    const [data, setData] = useState([]);
    //data to be passed to the axios (which is a promise based http client) call to get the data from the api
    useEffect(
        () => {
            axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
                .then(
                    (response) => {
                        setData(response.data.books);
                    }
                )
                .catch((error) => console.log(error))
        }, []);

    return (
        // Read compoentent that dislays to the main react app when called in app.js
        <div>
            <h2>Hello from Read  compoent </h2>
            <Books myBooks={data}></Books>
        </div>
    );
}

export default Read;