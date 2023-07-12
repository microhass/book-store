import styled from 'styled-components';

const Header = styled.header`
  background-color: #fff;
  padding: 1rem 2rem;
  max-width: 1000px;
  margin: 2rem 1rem 0;
  border: 1px solid #efefef;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.4rem;
    color: #0290ff;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1000px) {
    margin: 2rem auto 0;
  }
`;

export default Header;
