import React from 'react'
import Book from './Book'

function RenderingLists() {
    const booklist = [
        'to kill a mockingbird', 
        'the great gatsby',
        'the catcher in the rye'
    ]

    const books = [
        {
            title: 'To Kill A Mockingbird',
            author: 'Harper Lee',
            pages: 281
        },
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            pages: 218
        },
        {
            title: 'The Catcher in the Rye',
            author: 'J. D. Salinger', 
            pages: 234
        }
    ]   

    return (
        <div>
            {booklist.map(book => {
                return <h2 key={book}>{book}</h2>
            })}
            <hr />
            {
                books.map(book => {
                    return (
                        < Book key={book.title} book={book} />
                    )
                })
            }
        </div>
    )
}

export default RenderingLists