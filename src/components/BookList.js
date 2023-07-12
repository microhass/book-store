import React from 'react';
import BookListDiv from './styles/styledBookList';
import Book from './Book';

const BookList = () => {
  const books = [
    {
      id: 1,
      title: 'the last black unicorn',
      author: 'tiffany hadish',
      chapter: 1,
    },
    {
      id: 2,
      title: 'shutter me',
      author: 'tahereh mafi',
      chapter: 3,
    },
  ];

  return (
    <BookListDiv>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          chapter={book.chapter}
        />
      ))}
    </BookListDiv>
  );
};

export default BookList;
