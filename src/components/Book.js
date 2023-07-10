import React from 'react';
import BookDiv from './styles/styledBook';

const Book = () => {
  return (
    <BookDiv>
      <div className='details'>
        <h3 className='title'>the hunger games</h3>
        <p className='author'>Yuqee chen</p>

        <div className='book-actions actions'>
          <button type='button'>comments</button>
          <button type='button'>remove</button>
          <button type='button'>Edit</button>
        </div>
      </div>
      <div className='chapters'>
        <p className='current-chapter'>current chapter</p>
        <h6 className='chapter'>Chapter 10</h6>

        <div className='chapter-actions actions'>
          <button type='button'>update progress</button>
        </div>
      </div>
    </BookDiv>
  );
};

export default Book;
