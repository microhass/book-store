import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import BookDiv from './styles/styledBook';
import BookChapters from './BookChapters';
import { bookActions } from '../redux/books/booksSlice';

const Book = ({
  title, author, chapter, itemId,
}) => {
  const dispatch = useDispatch();
  const removeBookHandler = () => {
    dispatch(bookActions.deleteBook({ bookId: itemId }));
  };

  return (
    <BookDiv>
      <div className="details">
        <h3 className="title">{title}</h3>
        <p className="author">{author}</p>

        <div className="book-actions actions">
          <button type="button">comments</button>
          <button type="button" onClick={removeBookHandler}>
            remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <BookChapters chapter={chapter} />
    </BookDiv>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  chapter: PropTypes.number,
  itemId: PropTypes.string,
};

Book.defaultProps = {
  title: 'book 1',
  author: 'jane doe',
  chapter: 1,
  itemId: '',
};

export default Book;
