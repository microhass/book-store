import { useSelector } from 'react-redux';
import BookListDiv from './styles/styledBookList';
import Book from './Book';

const BookList = () => {
  const { books } = useSelector((state) => state.books);

  return (
    <BookListDiv>
      {books.map((book) => (
        <Book
          key={book.item_id}
          itemId={book.item_id}
          title={book.title}
          author={book.author}
          chapter={book.chapter}
        />
      ))}
    </BookListDiv>
  );
};

export default BookList;
