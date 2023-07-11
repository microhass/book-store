import styled from 'styled-components';

const BookListDiv = styled.section`
  background-color: #f5f5f5;
  display: grid;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 1rem;
  padding: 2rem 1rem 2rem;

  @media (min-width: 1000px) {
    padding: 2rem 5rem;
    margin: 0 auto;
  }
`;

export default BookListDiv;
