import {React, useEffect, useState}  from 'react'

export function BooksApiResult(identifier) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [books, setBooks] = useState([]);

    const url = `https://www.googleapis.com/books/v1/volumes?q=${identifier}`;
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
    let res = {
        'books': books,
        'error': error,
        'isLoaded': isLoaded
            }
    return(res)
}


// export function UserLibraryApi(props){
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [books, setBooks] = useState([]);

//     const url = `https://www.googleapis.com/books/v1/mylibrary/bookshelves`;
//     console.log(url)
//     const options = {
//         method: "GET"
//     };

//     useEffect(() => {
//         fetch(url, options)
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     setIsLoaded(true);
//                     setBooks(result);
//                 },
//                 (error) => {
//                     setIsLoaded(true);
//                     setError(error);
//                   }
//             )
//     }, [])
//     return(books)
// }