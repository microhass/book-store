import React, { useRef } from 'react';
import BookForm from './styles/styledForm';

const CreateBook = () => {
  const titleRef = useRef();
  const authorRef = useRef();

  const bookSubmitHandler = (e) => {
    e.preventDefault();
    const bookTitle = titleRef.current.value;
    const bookAuthor = authorRef.current.value;

    if (bookTitle.trim() === '' || bookAuthor.trim() === '') return;
    console.log('success');
  };

  return (
    <BookForm onSubmit={bookSubmitHandler}>
      <h3>add a new book</h3>

      <input
        type='text'
        name='title'
        id='title'
        placeholder='Book Title'
        ref={titleRef}
      />
      <input
        type='text'
        name='author'
        id='author'
        placeholder='Book Author'
        ref={authorRef}
      />
      <button type='submit'>add book</button>
    </BookForm>
  );
};

export default CreateBook;
