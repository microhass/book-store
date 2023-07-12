import styled from 'styled-components';

const BookDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 25px 20px;
  padding-right: 2rem;
  border-radius: 5px;
  border: 1px solid #daeaea;

  .details {
    text-transform: capitalize;
    
    .title {
      font-size: large;
    }

    .author {
      font-style: italic;
      font-weight: 300;
      font-size: small;
      opacity: 0.6;
      margin-top: 3px;
    }

    .book-actions {
      display: flex;
      gap: 1rem;

      button {
        color: #7eacd4;
        text-transform: capitalize;

        &:hover {
          color: #0290ff;
        }
      }
    }
  }

  .chapters {
    .chapter-actions button {
      background-color: #0290ff;
      color: #fff;
      text-transform: uppercase;
      font-size: 11px;
      padding: 6px 18px;
      border-radius: 3px;
    }

    .current-chapter {
      text-transform: uppercase;
      font-size: 9px;
      opacity: 0.5;
    }

    .chapter {
      margin-top: 5px;
      font-size: 14px;
      font-weight: 500;
      text-transform: capitalize;
    }
  }

  .actions {
    margin-top: 1.1rem;
  }

  @media (min-width: 1000px) {
    padding-right: 5rem;
  }
`;

export default BookDiv;
