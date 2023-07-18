import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookListDiv from './styles/styledBookList';
import Book from './Book';
import { fetchAPIBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAPIBooks({ method: 'get' }));
  }, [dispatch]);

  const { books } = useSelector((state) => state.books);

  return (
    <BookListDiv>
      {books.map((book) => (
        <Book
          key={book.item_id}
          bookId={book.item_id}
          title={book.title}
          author={book.author}
          chapter={book.chapter}
        />
      ))}
    </BookListDiv>
  );
};

export default BookList;
