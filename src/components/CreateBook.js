import React, { useRef } from 'react';
import BookForm from './styles/styledForm';

const CreateBook = () => {
  const titleRef = useRef();
  const authorRef = useRef();

  const bookSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <BookForm onSubmit={bookSubmitHandler}>
      <h3>add a new book</h3>

      <div>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Book Title"
          ref={titleRef}
        />
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Book Author"
          ref={authorRef}
        />
        <button type="submit">add book</button>
      </div>
    </BookForm>
  );
};

export default CreateBook;
