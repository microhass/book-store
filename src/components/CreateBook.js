import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookForm from './styles/styledForm';
import { fetchAPIBooks } from '../redux/books/booksSlice';

const CreateBook = () => {
  const titleRef = useRef();
  const authorRef = useRef();
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.books);

  const bookSubmitHandler = (e) => {
    e.preventDefault();
    const inputTitle = titleRef.current.value;
    const inputAuthor = authorRef.current.value;

    if (inputTitle.trim() === '' || inputAuthor.trim() === '') return;

    const newBook = {
      item_id: new Date().toISOString(),
      title: inputTitle,
      author: inputAuthor,
      category: 'fiction',
    };

    dispatch(fetchAPIBooks({ method: 'post', newBook }));
    titleRef.current.value = '';
    authorRef.current.value = '';
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
        <button type="submit" className={isLoading ? 'loading' : ''}>
          add book
        </button>
      </div>
    </BookForm>
  );
};

export default CreateBook;
