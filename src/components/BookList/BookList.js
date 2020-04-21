import React from 'react'
import BookListTitle from './BookListTitle/BookListTitle'

function BookList(props) {
  return (
    <section>
      <BookListTitle>
        {props.category}
      </BookListTitle>
      {
        //props.bookList.map()
      }

    </section>
  )
}

export default BookList
