import {BooksApiResult} from '../api/lookup';
import React from 'react';


export function BookList(props) {
    if (props.identifier){
        const result = BooksApiResult(props.identifier)
        
        if (result.error) {
            return (<div>Error: {result.message}</div>);
        } 
        else if (!result.isLoaded) {
            return <div>Loading...</div>;
        } 
        else {
            return (
            <div className='container'>
                <div className='bg-dark text-white'>
                    <ul className="list-group ">
                        {result.books.map(item => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center list-group-item-action list-group-item-dark">
                            {item.volumeInfo.title}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            );
        }
    }   
}

export function BookInput(props){
    const textAreaRef = React.createRef()
    const handleSubmit = (event) => {
      event.preventDefault()
      console.log(encodeURI(textAreaRef.current.value))
    }
    return (
    <div>
        <div className='col-12 mb-3 w-75 mx-auto'>
            <form onSubmit={handleSubmit}>
            <textarea ref={textAreaRef} required={true} className='form-control' name='tweet'>

            </textarea>
            <button type='submit' className='btn btn-primary my-3'>Search</button>
            </form>
        </div>
        <BookList identifier='oliver%20twist' />
    </div>)
}