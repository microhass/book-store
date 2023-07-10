import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <header>
      <h1>Book Store</h1>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/category'}>Category</Link>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
  </>
);

export default Layout;
