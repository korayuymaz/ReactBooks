import {React, useEffect, useState}  from 'react'

export function BooksApiResult(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [books, setBooks] = useState([]);

    const identifier = props.identifier
    const url = `https://www.googleapis.com/books/v1/volumes?q=Oliver%20Twist`;
    console.log(url)
    const options = {
        method: "GET"
    };

    useEffect(() => {
        fetch(url, options)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setBooks(result.items);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                  }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div className='bg-dark text-white'>
                <ul className="list-group ">
                    {books.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center list-group-item-action list-group-item-dark">
                       {item.volumeInfo.title}
                    </li>
                    ))}
                </ul>
            </div>
        );
      }
    }



