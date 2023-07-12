import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './styles/styledHeader';
import userImage from '../images/user.png';

const Layout = () => (
  <>
    <Header>
      <div>
        <h1>Bookstore CMS</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">books</Link>
            </li>
            <li>
              <Link to="/category">categories</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="profile">
        <img src={userImage} alt="User Profile" />
      </div>
    </Header>
    <Outlet />
  </>
);

export default Layout;
