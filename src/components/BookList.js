import React from 'react';
import BookListDiv from './styles/styledBookList';
import Book from './Book';

const BookList = () => {
  const books = [1, 2, 3].map((_) => <Book />);

  return <BookListDiv>
    {books}
  </BookListDiv>;
};

export default BookList;
