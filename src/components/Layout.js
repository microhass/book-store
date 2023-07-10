import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './styles/styledHeader';

const Layout = () => (
  <>
    <Header>
      <h1>Bookstore CMS</h1>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>books</Link>
          </li>
          <li>
            <Link to={'/category'}>categories</Link>
          </li>
        </ul>
      </nav>
    </Header>
    <Outlet />
  </>
);

export default Layout;
