import React from 'react';
import PropTypes from 'prop-types';
import BookDiv from './styles/styledBook';
import BookChapters from './BookChapters';

const Book = ({ title, author, chapter }) => (
  <BookDiv>
    <div className="details">
      <h3 className="title">{title}</h3>
      <p className="author">{author}</p>

      <div className="book-actions actions">
        <button type="button">comments</button>
        <button type="button">remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
    <BookChapters chapter={chapter} />
  </BookDiv>
);

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  chapter: PropTypes.number,
};

Book.defaultProps = {
  title: 'book 1',
  author: 'jane doe',
  chapter: 1,
};

export default Book;
