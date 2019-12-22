import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>
      <span> | </span>
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}
const headerStyle = {
  backgroundColor: '#ccc',
  textAlign: 'center',
  padding: '10px'
};

const linkStyle = {
  textDecoration: 'none'
};

export default Header;
