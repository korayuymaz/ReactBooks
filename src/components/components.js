import {BooksApiResult} from '../api/lookup';
import React from 'react';


// This has to change
export function BookList(props) {
    if (props.identifier){
        return (
        <div className='container'>
            <BooksApiResult identifier={props.identifier} /> 
        </div>
        )
    }else{
        return (
            <div className='container'>
                Loading... 
            </div>
            )
    }
}

export function BookInput(props){
    const textAreaRef = React.createRef()
    const handleSubmit = (event) => {
      event.preventDefault()
      console.log(encodeURI(textAreaRef.current.value))
    }
    return <div className={props.className}>
            <div className='col-12 mb-3'>
              <form onSubmit={handleSubmit}>
                <textarea ref={textAreaRef} required={true} className='form-control' name='tweet'>

                </textarea>
                <button type='submit' className='btn btn-primary my-3'>Search</button>
            </form>
            </div>
        <BookList identifier='oliver' />
    </div>
}